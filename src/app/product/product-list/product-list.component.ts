import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductListService } from './product-list.service';
import { ProductModel } from 'src/interface/product.interface';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //#region [Properties]
  
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name', 'categoryName','quantityStock', 
  'costPrice', 'salePrice', 'totalValueCostOfInventory', 'totalValueSaleStock'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: ProductModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<ProductModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }
  
  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }

  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }
  
  // #endregion

  // #region [Constructor]

  constructor(private productListService: ProductListService,
              private router: Router) { }
  
  // #endregion
  
  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.productListService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  // #endregion
}


