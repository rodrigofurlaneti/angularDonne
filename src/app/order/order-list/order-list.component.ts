import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { OrderListService } from './order-list.service';
import { OrderModel } from 'src/interface/order.interface';

let ELEMENT_DATA: OrderModel[];

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

    //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['id','command','buyerName','product','amount'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: OrderModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<OrderModel>();
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

  constructor(private orderListService: OrderListService,
              private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.orderListService.list().subscribe(list => {
      this.dataSource = list;
      console.log(list);
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os pedidos', err);
    })
  }
 
  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  // #endregion
}