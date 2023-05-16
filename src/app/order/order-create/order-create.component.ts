import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderCreateService } from './order-create.service';
import { OrderModel } from '../../../interface/order.interface';
import { FormControl } from '@angular/forms';
import { ProfileModel } from 'src/interface/profile.interface';
import { MatSelect } from '@angular/material/select';
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

export class OrderCreateComponent implements OnInit, AfterViewInit {

  clientSelected: string = " ";

  clientSelectedID: number = 0;

  productSelectedName: string = " ";

  productSelectedID: number = 0;

  order: OrderModel;

  displayedColumns: string[] = ['name'];

  disableSelect = new FormControl(false);

  selectedCommand: CommandModel = new CommandModel();

  constructor(private orderCreateService: OrderCreateService,
    private commandCreateService: CommandCreateService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {
    this.order = new OrderModel()
  }

  @ViewChild('matSelect')
  matSelect!: MatSelect;

  onChangeofOptions(newGov: string) {
    console.log(newGov);
  }

  ngOnInit(): void {
    this.order = new OrderModel();
    this.listCommand();
    this.listProducts();
  }

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(obj => {
      this.selectedCommand.commandId = obj.commandId;
    });
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
      this.dataSourceProducts = ELEMENT_DATA_PRODUCT;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  change(event: any) {
    this.clientSelected = event.buyerName;
    this.clientSelectedID = event.buyerId;
    console.log(this.clientSelected);
    console.log(this.clientSelectedID);
  }

  changeProduct(event: any) {
    console.log(event);
    this.productSelectedID = event.productId;
    this.productSelectedName = event.productName;
    console.log(event.productName);
  }

  save() {
    var amount = (<HTMLSelectElement>document.getElementById('orderAmount')).value;

    if (this.order.clientName != '') {
      var orderModel = new OrderModel();
      orderModel.clientName = this.clientSelected;
      orderModel.clientId = this.clientSelectedID;
      orderModel.productName = this.productSelectedName;
      orderModel.productId = this.productSelectedID;
      orderModel.amount = parseInt(amount);
      this.orderCreateService.save(orderModel).subscribe(order => {
        this._snackBar.open('Pedido cadastrado com sucesso!','', {
          duration: 2000
        });
        this.router.navigate(['order-list']);
      }, err => {
        console.log('Erro ao adicionar um novo pedido!', err);
      })
    }
  }

  dataSourceCommand = ELEMENT_DATA_COMMAND;
  dataSourceProducts = ELEMENT_DATA_PRODUCT;

  clickedRows = new Set<ProfileModel>();

  reply() {
    this.router.navigate(['main']);
  }
}