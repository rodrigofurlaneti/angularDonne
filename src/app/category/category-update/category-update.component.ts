import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CategoryUpdateService } from './category-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryModel } from 'src/interface/category.interface';

@Component({
  selector: 'category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})

export class CategoryUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }

  //Property MessageSuccess
  private _messageSuccess: string = '';
  get messageSuccess() { return this._messageSuccess; }
  set messageSuccess(value) { this._messageSuccess = value; }
  
  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

  //Property MessageBuyerName
  private _messageBuyerName: string = '';
  get messageBuyerName() { return this._messageBuyerName; }
  set messageBuyerName(value) { this._messageBuyerName = value; }
  
  //Property MessageBuyerAddress
  private _messageBuyerAddress: string = '';
  get messageBuyerAddress() { return this._messageBuyerAddress; }
  set messageBuyerAddress(value) { this._messageBuyerAddress = value; }
      
  //Property MessageBuyerPhone
  private _messageBuyerPhone: string = '';
  get messageBuyerPhone() { return this._messageBuyerPhone; }
  set messageBuyerPhone(value) { this._messageBuyerPhone = value; }

  //Property CategoryModel
  private _categoryModel = new CategoryModel();
  get categoryModel() { return this._categoryModel; }
  set categoryModel(value) { this._categoryModel = value; }

  //Property IsIdZero
  private _isIdZero: boolean = true;
  get isIdZero() { return this._isIdZero; }
  set isIdZero(value) { this._isIdZero = value; }

  //Property IsIdGreaterThanZero
  private _isIdGreaterThanZero: boolean = false;
  get isIdGreaterThanZero() { return this._isIdGreaterThanZero; }
  set isIdGreaterThanZero(value) { this._isIdGreaterThanZero = value; }

  //Property Status
  private _status: string = '';
  get status() { return this._status; }
  set status(value) { this._status = value; }

  //Property Ids
  private _ids: number = 0;
  get ids() { return this._ids; }
  set ids(value) { this._ids = value; }

  //Property DataSource
  private _dataSource: CategoryModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  // #endregion

  // #region [Constructor]

  constructor(private categoryUpdateService: CategoryUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();    
    this.hideUpdateButton();
  }
  
 hideUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'none';
  }

  showUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'block';
  }

  list() {
    this.categoryUpdateService.list().subscribe(list => {
      this.dataSource = list;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.categoryUpdateService.getById(id)
                              .subscribe(category => { 
                                this.categoryModel.categoryId = category.categoryId;
                                this.categoryModel.categoryName = category.categoryName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  clickedRows = new Set<CategoryModel>();

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public update() {
    
    this.categoryModel = this.checkFields(this.categoryModel);

    //save
    if(this.categoryModel.categoryName != "")
    {
      this.authenticatedUser();
      this.categoryUpdateService.update(this.categoryModel)
                              .subscribe(category => { 
                                this.successMessage();
                                this.reply();
                           }, err => {
                            this.errorMessage();
                            console.log('Erro ao listar as categorias', err);
                          });
    }
  }

  public checkFields(objCategoryModel : CategoryModel) : CategoryModel
  {
    if(objCategoryModel.categoryName == "")
    {
      this.messageErro = 'Não está preenchido o campo nome da categoria!';
      this._snackBar.open(this.messageErro,'', {
        duration: this.messageTime
      });
    }
    return objCategoryModel;
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

  public successMessage(){
    this._snackBar.open('A categoria "'+ this.categoryModel.categoryName +'" foi atualizada com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao atualizar a categoria "'+ this.categoryModel.categoryName +'" !','', {
      duration: this.messageTime
    });
  }
  // #endregion
}