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

  categoryModel = new CategoryModel();

  messageTime: number = 5000;

  constructor(private categoryCreateService: CategoryCreateService, 
    private _snackBar: MatSnackBar,  
    private readonly router: Router) { }

  save() {
    
    //checkFields
    if(this.categoryModel.categoryName == "")
    {
      this._snackBar.open('O nome da categoria está vazio, precisa preencher!','', {
        duration: this.messageTime
      });
    }

    //save
    if(this.categoryModel.categoryName != "")
    {
      this.authenticatedUser();
      this.categoryCreateService.save(this.categoryModel).subscribe(user => {
        this.successMessage()
        this.categoryList();
      }, err => {
        this.errorMessage()
        console.log('Erro ao cadastrar a categoria "'+ this.categoryModel.categoryName +'", necessário refazer o procedimento!', err);
      })
    }
  }

  reply(){
    this.router.navigate(['main']);
  }

  categoryList(){
    this.router.navigate(['category-list']);
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
    this._snackBar.open('A categoria "'+ this.categoryModel.categoryName +'" foi cadastrada com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar a categoria "'+ this.categoryModel.categoryName +'" !','', {
      duration: this.messageTime
    });
  }
}