import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { OrderUpdateService } from './order-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderModel } from 'src/interface/order.interface';
import { BuyerModel } from 'src/interface/buyer.interface';
import { ProductModel } from 'src/interface/product.interface';
import { BuyerListService } from 'src/app/buyer/buyer-list/buyer-list.service';
import { ProductListService } from 'src/app/product/product-list/product-list.service';

let ELEMENT_DATA: OrderModel[];
let ELEMENT_DATA_PRODUCT: ProductModel[];
let ELEMENT_DATA_BUYER: BuyerModel[];

@Component({
  selector: 'order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})

export class OrderUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }

  //Property MessageSuccess
  private _messageSuccess: string = '';
  get messageSuccess() { return this._messageSuccess; }
  set messageSuccess(value) { this._messageSuccess = value; }
  
  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

  //Property OrderModel
  private _orderModel = new OrderModel();
  get orderModel() { return this._orderModel; }
  set orderModel(value) { this._orderModel = value; }

  //Property IsIdZero
  private _isIdZero: boolean = true;
  get isIdZero() { return this._isIdZero; }
  set isIdZero(value) { this._isIdZero = value; }

  //Property IsIdGreaterThanZero
  private _isIdGreaterThanZero: boolean = false;
  get isIdGreaterThanZero() { return this._isIdGreaterThanZero; }
  set isIdGreaterThanZero(value) { this._isIdGreaterThanZero = value; }

  //Property Status
  private _status: string = '';
  get status() { return this._status; }
  set status(value) { this._status = value; }

  //Property Ids
  private _ids: number = 0;
  get ids() { return this._ids; }
  set ids(value) { this._ids = value; }

  orderID: number = 0;
  clientSelected: string = " ";
  clientSelectedID: number = 0;
  productSelectedName: string = " ";
  productSelectedID: number = 0;

  public selected: string = '';

  // #endregion


  constructor(private orderUpdateService: OrderUpdateService,
    private buyerListService: BuyerListService,
    private productListService: ProductListService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
    this.listBuyer();
    this.listProducts();
    this.hideUpdateButton();
  }

  hideUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'none';
  }

  showUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'block';
  }

  listBuyer() {
    this.buyerListService.list().subscribe(list => {
      ELEMENT_DATA_BUYER = list;
      this.dataSourceStore = ELEMENT_DATA_BUYER;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  listProducts() {
    this.productListService.list().subscribe(list => {
      ELEMENT_DATA_PRODUCT = list;
      this.dataSourceProducts = ELEMENT_DATA_PRODUCT;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  change(event: any) {
    this.clientSelected = event.buyerName;
    this.clientSelectedID = event.buyerId;
    console.log(event.buyerName);
    console.log(this.clientSelectedID);
  }

  changeProduct(event: any) {
    this.productSelectedID = event.productId;
    this.productSelectedName = event.productName;
    console.log("nome do produto" + " " + event.productName);
  }


  list() {
    this.orderUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar os usuários', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.orderUpdateService.getById(id)
                              .subscribe(order => { 
                                this.productSelectedName = order.productName;
                                this.orderID = id;
                                this.orderModel.orderId = id;
                                this.orderModel.productName = order.productName;
                                this.orderModel.amount = order.amount;
                                this.orderModel.productId = order.productId;
                                this.orderModel.userId = order.userId;
                                this.orderModel.userName = order.userName;
                                this.orderModel.dateInsert = order.dateInsert;
                                this.orderModel.dateUpdate = order.dateUpdate;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
                              
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<OrderModel>();

  dataSourceStore = ELEMENT_DATA_BUYER;
  dataSourceProducts = ELEMENT_DATA_PRODUCT;

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public update() {
    this.orderModel.productName = this.productSelectedName;
    this.orderModel.productId = this.productSelectedID;
    this.orderModel.orderId = this.orderID;
    this.orderModel.amount = parseInt((<HTMLSelectElement>document.getElementById('orderAmount')).value);
    this.orderUpdateService.update(this.orderModel)
                              .subscribe(order => { 
                                this._snackBar.open('Pedido atualizado com sucesso!','', {
                                  duration: 2000
                                });
                                this.reply();

                              });
  }
}