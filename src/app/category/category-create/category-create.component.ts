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
    if(this.categoryModel.categoryName == "")
    {
      this._snackBar.open('Não está preenchido o campo nome da categoria!', 'Voltar');
    }
    if(this.categoryModel.categoryName != '')
    {
      this.categoryCreateService.save(this.categoryModel).subscribe(user => {
        this._snackBar.open('Categoria cadastrada com sucesso!', 'Voltar');
        this.router.navigate(['category-list']);
      }, err => {
          console.log('Erro ao adicionar a categoria!', err);
      })
    }
  }
  reply(){
    this.router.navigate(['main']);
  }
}