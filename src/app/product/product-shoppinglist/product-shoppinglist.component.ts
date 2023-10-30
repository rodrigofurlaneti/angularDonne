import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductShoppingListService } from './product-shoppinglist.service';
import { ShoppingListModel } from 'src/interface/shoppinglist.interface';

let ELEMENT_DATA: ShoppingListModel[];

@Component({
  selector: 'product-shoppinglist',
  templateUrl: './product-shoppinglist.component.html',
  styleUrls: ['./product-shoppinglist.component.css']
})
export class ProductShoppingListComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'categoryId', 'categoryName',
  'costPrice', 'quantityToBuy', 'totalValueOfLastPurchase'];

  constructor(private productShoppingListService: ProductShoppingListService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.productShoppingListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao lista as compras', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<ShoppingListModel>();

  reply(){
    this.router.navigate(['main']);
  }
}


