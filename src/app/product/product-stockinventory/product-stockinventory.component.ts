import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductStockInventoryService } from './product-stockinventory.service';
import { StockInventoryModel } from '../../../interface/stockInventory.interface';

let ELEMENT_DATA: StockInventoryModel[];

@Component({
  selector: 'product-stockinventory',
  templateUrl: './product-stockinventory.component.html',
  styleUrls: ['./product-stockinventory.component.css']
})

export class ProductStockInventoryComponent {

  displayedColumns: string[] = ['totalValueCostOfInventory', 'totalValueSaleStock'];
  
  constructor(private productStockInventoryService: ProductStockInventoryService, 
    private readonly router: Router) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.productStockInventoryService
    .list()
    .subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(list);
    }, err => {
      console.log('Erro ao listar os inventários!', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<StockInventoryModel>();

  reply(){
    this.router.navigate(['main']);
  }
}




