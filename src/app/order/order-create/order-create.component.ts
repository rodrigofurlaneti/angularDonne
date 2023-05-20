import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderCreateService } from './order-create.service';
import { OrderModel } from '../../../interface/order.interface';
import { ProfileModel } from 'src/interface/profile.interface';
import { CommandModel } from 'src/interface/command.interface';
import { ProductModel } from 'src/interface/product.interface';
import { CommandCreateService } from 'src/app/command/command-create/command-create.service';

let ELEMENT_DATA_PRODUCT: ProductModel[];
let ELEMENT_DATA_COMMAND: CommandModel[];

@Component({
  selector: 'order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})

export class OrderCreateComponent implements OnInit {

  commandSelected: string = "";

  commandSelectedID: number = 0;

  productSelected: string = "";

  productSelectedID: number = 0;

  orderModel= new OrderModel();

  messageTime: number = 5000;

  constructor(private orderCreateService: OrderCreateService,
    private commandCreateService: CommandCreateService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {
  }

  ngOnInit(): void {
    this.listCommand();
    this.listProducts();
  }

  listCommand() {
    this.commandCreateService.listCommand().subscribe(command => {
      ELEMENT_DATA_COMMAND = command;
      this.dataSourceCommand = ELEMENT_DATA_COMMAND;
    }, err => {
      console.log('Erro ao listar os pedidos', err);
    })
  }

  listProducts() {
    this.orderCreateService.listProducts().subscribe(list => {
      ELEMENT_DATA_PRODUCT = list;
      this.dataSourceProduct = ELEMENT_DATA_PRODUCT;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  changeCommand(event: any) {
    this.commandSelectedID = event.commandId;
    this.commandSelected = event.buyerName;
  }

  changeProduct(event: any) {
    this.productSelectedID = event.productId;
    this.productSelected = event.productName;
    this.orderCreateService.getProductById(this.productSelectedID)
        .subscribe(productResponse => { 
          this.orderModel.salePrice = productResponse.salePrice;
          console.log(this.orderModel.salePrice);
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
    this._snackBar.open('O pedido "'+ this.orderModel.orderId +'" foi cadastrado com sucesso!','', {
    duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar o pedido "'+ this.orderModel.orderId +'" !','', {
      duration: this.messageTime
    });
  }

  orderList(){
    this.router.navigate(['order-list']);
  }

  calculate(){
    var totalValue = parseFloat(this.orderModel.salePrice) * this.orderModel.amount;
    this.orderModel.totalSalePrice = totalValue.toString();
  }

  reply() {
    this.router.navigate(['main']);
  }
}