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

  constructor(private categoryCreateService: CategoryCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router) { }

  save() {
    
    //checkFields
    if(this.categoryModel.categoryName == "")
    {
      this._snackBar.open('O nome da categoria está vazio, precisa preencher!');
    }

    //save
    if(this.categoryModel.categoryName != "")
    {
      this.categoryCreateService.save(this.categoryModel).subscribe(user => {
        this._snackBar.open('A categoria "'+ this.categoryModel.categoryName +'" foi cadastrada com sucesso!', 'Voltar');
        this.categoryList();
      }, err => {
        this._snackBar.open('Erro ao cadastrar a categoria "'+ this.categoryModel.categoryName +'" foi cadastrada com sucesso!', 'Voltar');
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
}