import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CategoryListService } from './category-list.service';
import { CategoryModel } from 'src/interface/category.interface';

let ELEMENT_DATA: CategoryModel[];

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(private categoryListService: CategoryListService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.categoryListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<CategoryModel>();

  reply(){
    this.router.navigate(['main']);
  }
  
}


