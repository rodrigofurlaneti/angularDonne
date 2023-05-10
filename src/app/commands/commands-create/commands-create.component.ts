import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandsCreateService } from './commands-create.service';
import { CommandsModel } from '../../../interface/commands.interface';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';
import { MatSelect } from '@angular/material/select';
import { UserNameService } from 'src/app/user-name.service';
import { UserIdService } from 'src/app/user-id.service';
import { BuyerModel } from 'src/interface/buyer.interface';
import { OrderModel } from '../../../interface/order.interface';
import { ProductModel } from 'src/interface/product.interface';


let ELEMENT_DATA_Buyer: BuyerModel[];
let ELEMENT_DATA_PRODUCT: ProductModel[];

@Component({
  selector: 'commands-create',
  templateUrl: './commands-create.component.html',
  styleUrls: ['./commands-create.component.css']
})

export class CommandsCreateComponent {

  orders: { productName: string, quantity: number, productId: number, }[] = [];
  dataSourceProducts = [
    { productName: '' }];
  addOrder() {
    this.orders.push({ productName: '', quantity: 0, productId: 0, });
    console.log("quantidade de pedidos:" + this.orders.length);
  };


  selectValueSelected = false;
  buyerNameSelect: string = " ";
  buyerIDSelect: number = 0;
  productSelectedName: string = " ";
  productSelectedID: number = 0;
  commandId: number = 0;

  order: OrderModel;

  selectedBuyerName: BuyerModel = new BuyerModel();

  commandsModel = new CommandsModel();

  constructor(private commandsCreateService: CommandsCreateService,
    private _snackBar: MatSnackBar, private readonly router: Router,
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,
    private userNameService: UserNameService,
    private userIdService: UserIdService,
    private renderer: Renderer2) {
    this.order = new OrderModel()
  }

  @ViewChild('matSelect')
  matSelect!: MatSelect;

  ngOnInit(): void {
    this.listBuyer();
    this.listProducts();
    this.addOrder();
    this.order = new OrderModel();
  }

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(obj => {
      this.selectedBuyerName.buyerName = obj.buyerName;
    });
  }

  change(event: any) {
    this.buyerIDSelect = event.buyerId;
    this.buyerNameSelect = event.buyerName;
  }

  changeProduct(product: ProductModel) {
    console.log(product.productName);
    this.productSelectedName = product.productName;
    this.productSelectedID = product.productId;
  }

  listBuyer() {
    this.commandsCreateService.listBuyer().subscribe(list => {
      ELEMENT_DATA_Buyer = list;
      this.dataSourceBuyer = ELEMENT_DATA_Buyer;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  listProducts() {
    this.commandsCreateService.listProducts().subscribe(list => {
      ELEMENT_DATA_PRODUCT = list;
      this.dataSourceProducts = ELEMENT_DATA_PRODUCT;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  saveClient() {

    //checkFields
    if (this.selectedBuyerName.buyerName == "") {
      this._snackBar.open('O nome do client está vazio, precisa preencher!', '', {
        duration: 2000
      });
    }

    //save
    if (this.selectedBuyerName.buyerName != "") {

      this.commandsModel.storeName = this.storeNameService.storeName;
      this.commandsModel.storeId = parseInt(this.storeIdService.storeId);
      this.commandsModel.buyerId = this.buyerIDSelect;
      this.commandsModel.buyerName = this.buyerNameSelect;
      this.commandsModel.userId = parseInt(this.userIdService.userID);
      this.commandsModel.userName = this.userNameService.userName;
      this.selectValueSelected = true;

      this.commandsCreateService.saveClient(this.commandsModel).subscribe(client => {
        this._snackBar.open('O novo cliente "' + this.commandsModel.buyerName + '" foi cadastrado com sucesso!', '', {
          duration: 2000
        });
        this.commandId = client;
      }, err => {
        this._snackBar.open('Erro ao cadastrar o novo cliente "' + this.commandsModel.buyerName + '" foi cadastrada com sucesso!', '', {
          duration: 2000
        });
        console.log('Erro ao cadastrar o novo cliente "' + this.commandsModel.buyerName + '", necessário refazer o procedimento!', err);
      })
    }
  }

  saveCommand() {
    // Check fields
    if (this.orders.length === 0) {
      this._snackBar.open('Não há pedidos para salvar!', '', {
        duration: 2000
      });
      return;
    }

    // Save 
    for (const order of this.orders) {
      const orderModel = new OrderModel();
      orderModel.clientName = this.buyerNameSelect;
      orderModel.clientId = this.buyerIDSelect;
      orderModel.productName = this.productSelectedName;
      orderModel.productId = this.productSelectedID;
      orderModel.amount = order.quantity;
      orderModel.userId = parseInt(this.userIdService.userID);
      orderModel.userName = this.userNameService.userName;
      orderModel.storeName = this.storeNameService.storeName;
      orderModel.storeId = parseInt(this.storeIdService.storeId);

      this.commandsCreateService.saveCommand(orderModel).subscribe(command => {
        this._snackBar.open('O pedido foi salvo com sucesso!', '', {
          duration: 2000
        });
      }, err => {
        this._snackBar.open('Erro ao salvar o pedido, necessário refazer o procedimento!', '', {
          duration: 2000
        });
        console.log('Erro ao salvar o pedido:', err);
      });
    }
    this.orders = [];
    this.commandsList();
  }

  dataSourceBuyer = ELEMENT_DATA_Buyer;

  reply() {
    this.router.navigate(['main']);
  }

  commandsList() {
    this.router.navigate(['commands-list']);
  }
}