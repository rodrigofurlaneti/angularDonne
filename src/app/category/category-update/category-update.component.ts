import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CategoryUpdateService } from './category-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryModel } from 'src/interface/category.interface';

let ELEMENT_DATA: CategoryModel[];

@Component({
  selector: 'category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})

export class CategoryUpdateComponent implements OnInit {

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  categoryModel = new CategoryModel();
   
  constructor(private categoryUpdateService: CategoryUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();    
  }

  list() {
    this.categoryUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.categoryUpdateService.getById(id)
                              .subscribe(category => { 
                                this.categoryModel.categoryId = category.categoryId;
                                this.categoryModel.categoryName = category.categoryName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<CategoryModel>();

  reply(){
    this.router.navigate(['main']);
  }

  public update() {
    this.categoryModel.categoryName = (<HTMLSelectElement>document.getElementById('categoryName')).value;
    this.categoryUpdateService.update(this.categoryModel)
                              .subscribe(category => { 
                                this._snackBar.open('Categoria atualizada com sucesso!', 'Voltar');
                                this.reply();

                              });
  }
}