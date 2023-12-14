import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderCreateService } from './order-create.service';
import { OrderModel } from '../../../interface/order.interface';
import { ProfileModel } from 'src/interface/profile.interface';
import { CommandModel } from 'src/interface/command.interface';
import { ProductModel } from 'src/interface/product.interface';
import { CommandListService } from 'src/app/command/command-list/command-list.service';
import { ProductListService } from 'src/app/product/product-list/product-list.service';
import { ProductUpdateService } from 'src/app/product/product-update/product-update.service';

let ELEMENT_DATA_PRODUCT: ProductModel[];
let ELEMENT_DATA_COMMAND: CommandModel[];

@Component({
  selector: 'order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})

export class OrderCreateComponent implements OnInit {

    //#region [Properties]
  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }
  
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
  
  //Property OrderModel
  private _orderModel = new OrderModel();
  get orderModel() { return this._orderModel; }
  set orderModel(value) { this._orderModel = value; }

  //Property CommandSelected
  private _commandSelected: string = "";
  get commandSelected() { return this._commandSelected; }
  set commandSelected(value) { this._commandSelected = value; }

  //Property CommandSelectedID 
  private _commandSelectedID: number = 0;
  get commandSelectedID() { return this._commandSelectedID; }
  set commandSelectedID(value) { this._commandSelectedID = value; }

  //Property ProductSelected 
  private _productSelected: string = "";
  get productSelected() { return this._productSelected; }
  set productSelected(value) { this._productSelected = value; }

  //Property ProductSelectedID
  private _productSelectedID: number = 0;
  get productSelectedID() { return this._productSelectedID; }
  set productSelectedID(value) { this._productSelectedID = value; }

  //Property ProductSelectedID
  private _totalValue: number = 0;
  get totalValue() { return this._totalValue; }
  set totalValue(value) { this._totalValue = value; }

  // #endregion

  // #region [Constructor]

  constructor(private orderCreateService: OrderCreateService,
    private productListService: ProductListService,
    private productUpdateService: ProductUpdateService,
    private commandListService: CommandListService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {
  }

  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.listCommand();
    this.listProducts();
  }

  listCommand() {
    this.commandListService.list().subscribe(command => {
      ELEMENT_DATA_COMMAND = command;
      this.dataSourceCommand = ELEMENT_DATA_COMMAND;
    }, err => {
      console.log('Erro ao listar as comandas ', err);
    })
  }

  listProducts() {
    this.productListService.list().subscribe(list => {
      ELEMENT_DATA_PRODUCT = list;
      this.dataSourceProduct = ELEMENT_DATA_PRODUCT;
    }, err => {
      console.log('Erro ao listar os produtos ', err);
    })
  }

  changeCommand(event: any) {
    this.commandSelectedID = event.commandId;
    this.commandSelected = event.buyerName;
  }

  changeProduct(event: any) {
    this.productSelectedID = event.productId;
    this.productSelected = event.productName;
    this.productUpdateService.getById(this.productSelectedID)
        .subscribe(productResponse => { 
          this.orderModel.salePrice = productResponse.salePrice;
        });
  }

  save() {
    this.authenticatedUser();
    this.orderModel.productName = this.productSelected;
    this.orderModel.productId = this.productSelectedID;
    this.orderModel.buyerName = this.commandSelected;
    this.orderModel.commandId = this.commandSelectedID;
    this.orderCreateService.save(this.orderModel).subscribe(order => {
      this.successMessage();
      this.orderList();
        }, err => {
          this.errorMessage();
          console.log('Erro ao adicionar um novo pedido!', err);
        })
  }

  dataSourceCommand = ELEMENT_DATA_COMMAND;
  dataSourceProduct = ELEMENT_DATA_PRODUCT;

  clickedRows = new Set<ProfileModel>();

  public authenticatedUser(){
    // 👉️ User Login
    const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.orderModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.orderModel.userName = userNameLogin.value;
    }
}

  public successMessage(){
    this.messageSuccess = 'O pedido foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess,'', {
    duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao cadastrar o pedido!';
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  orderList(){
    this.routerString = 'order-list';
    this.router.navigate(['order-list']);
  }

  calculate(){
    this.totalValue = parseFloat(this.orderModel.salePrice) * this.orderModel.amount;
    this.orderModel.totalSalePrice = this.totalValue.toString();
  }

  reply() {
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  // #endregion
}
