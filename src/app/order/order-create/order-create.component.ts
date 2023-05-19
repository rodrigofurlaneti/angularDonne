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
  }

  save() {
    console.log(this.orderModel);
    this.orderModel.productName = this.productSelected;
    this.orderModel.productId = this.productSelectedID;
    this.orderModel.buyerName = this.commandSelected;
    this.orderModel.commandId = this.commandSelectedID;
    this.orderCreateService.save(this.orderModel).subscribe(order => {
      this._snackBar.open('Pedido cadastrado com sucesso!','', {
        duration: 2000
      });
        this.router.navigate(['order-list']);
        }, err => {
          console.log('Erro ao adicionar um novo pedido!', err);
        })
  }

  dataSourceCommand = ELEMENT_DATA_COMMAND;
  dataSourceProduct = ELEMENT_DATA_PRODUCT;

  clickedRows = new Set<ProfileModel>();

  reply() {
    this.router.navigate(['main']);
  }
}