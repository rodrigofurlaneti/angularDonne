import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductListService } from './product-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from 'src/interface/product.interface';

let ELEMENT_DATA: ProductModel[];

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(private productListService: ProductListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.productListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<ProductModel>();

  reply(){
    this.router.navigate(['main']);
  }
}


