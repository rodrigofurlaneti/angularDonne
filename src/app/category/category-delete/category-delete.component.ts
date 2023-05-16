import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CategoryDeleteService } from './category-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryModel } from 'src/interface/category.interface';

let ELEMENT_DATA: CategoryModel[];

@Component({
  selector: 'category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'userName'];

  status: string = '';

  ids: number = 0;

  constructor(private categoryDeleteService: CategoryDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.categoryDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public delete(id: number) {
    this.categoryDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('A categoria foi excluída com sucesso!', '', {
      duration: 2000
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<CategoryModel>();

  reply(){
    this.router.navigate(['main']);
  }
}
