import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'; 
import { OrderUpdateService } from './order-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderModel } from 'src/interface/order.interface';
import { BuyerModel } from 'src/interface/buyer.interface';
import { ProductModel } from 'src/interface/product.interface';

let ELEMENT_DATA: OrderModel[];
let ELEMENT_DATA_PRODUCT: ProductModel[];
let ELEMENT_DATA_BUYER: BuyerModel[];

@Component({
  selector: 'order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})

export class OrderUpdateComponent implements OnInit {

  orderID: number = 0;
  clientSelected: string = " ";
  clientSelectedID: number = 0;
  productSelectedName: string = " ";
  productSelectedID: number = 0;

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  public selected: string = '';

  orderModel = new OrderModel();

  constructor(private orderUpdateService: OrderUpdateService,
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
    this.orderUpdateService.listBuyer().subscribe(list => {
      ELEMENT_DATA_BUYER = list;
      this.dataSourceStore = ELEMENT_DATA_BUYER;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  listProducts() {
    this.orderUpdateService.listProducts().subscribe(list => {
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
                                console.log(this.productSelectedName + " + " + order.productName);
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
    this.router.navigate(['main']);
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