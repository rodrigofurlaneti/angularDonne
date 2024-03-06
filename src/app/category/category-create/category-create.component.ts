import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryCreateService } from './category-create.service';
import { CategoryModel } from '../../../interface/category.interface';

@Component({
  selector: 'category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})

export class CategoryCreateComponent {

  //#region [Properties]
  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }
  
  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }
  
  //Property FirstSuccessMessage
  private _firstSuccessMessage: string = '';
  get firstSuccessMessage() { return this._firstSuccessMessage; }
  set firstSuccessMessage(value) { this._firstSuccessMessage = value; }

  //Property SecondSuccessMessage
  private _secondSuccessMessage: string = '';
  get secondSuccessMessage() { return this._secondSuccessMessage; }
  set secondSuccessMessage(value) { this._secondSuccessMessage = value; }
  
  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }
  
  //Property CategoryModel
  private _categoryModel = new CategoryModel();
  get categoryModel() { return this._categoryModel; }
  set categoryModel(value) { this._categoryModel = value; }

  //Property MessageCategoryName
  private _messageCategoryName : string = '';
  get messageCategoryName() { return this._messageCategoryName; }
  set messageCategoryName(value) { this._messageCategoryName = value; }

  
  // #endregion

  // #region [Constructor]

  constructor(private categoryCreateService: CategoryCreateService, 
    private _snackBar: MatSnackBar,  
    private readonly router: Router) { }

  // #endregion

  // #region [Methods]

  public checkFields(objCategoryModel: CategoryModel):CategoryModel{
    if(objCategoryModel.categoryName == "")
    {
      this._messageCategoryName = 'Não está preenchido o campo nome da categoria!'; 
      this._snackBar.open(this.messageCategoryName,'', {
        duration: this.messageTime
      });
    }
    return objCategoryModel;
  }

  save() {
    
    this.categoryModel = this.checkFields(this.categoryModel);
    this.categoryModel.dateUpdate = new Date(1900, 1, 1, 1, 1, 1, 1);
    
    //save
    if(this.categoryModel.categoryName != "")
    {
      this.authenticatedUser();
      this.categoryCreateService.save(this.categoryModel).subscribe(user => {
        this.successMessage();
        this.categoryList();
      }, err => {
        this.errorMessage()
        console.log('Erro ao cadastrar a categoria "'+ this.categoryModel.categoryName +'", necessário refazer o procedimento!', err);
      })
    }
  }

  reply() : void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  categoryList() : void{
    this.routerString = 'category-list';
    this.router.navigate([this.routerString]);
  }

  public authenticatedUser(){
        // 👉️ User Login
        const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
        if (userIdLogin != null) {
          this.categoryModel.userId = parseInt(userIdLogin.value);
        }
        const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
        if (userIdLogin != null) {
          this.categoryModel.userName = userNameLogin.value;
        }
  }

  public successMessage():void{
    this.firstSuccessMessage = 'A categoria';
    this.secondSuccessMessage = 'foi cadastrada com sucesso!';
    this._snackBar.open(this.firstSuccessMessage + ' ' + this.categoryModel.categoryName + ' ' + this.secondSuccessMessage, '', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao cadastrar a categoria!';
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}