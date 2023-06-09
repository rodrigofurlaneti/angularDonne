import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductDeleteService } from './product-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from 'src/interface/product.interface';

let ELEMENT_DATA: ProductModel[];

@Component({
  selector: 'product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  displayedColumns: string[] = ['name','quantityStock'];

  status: string = '';

  ids: number = 0;

  messageTime: number = 5000;

  constructor(private productDeleteService: ProductDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.productDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public delete(id: number) {
    this.productDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('Excluido o produto com sucesso!','', {
      duration: this.messageTime
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<ProductModel>();

  reply(){
    this.router.navigate(['main']);
  }
}
