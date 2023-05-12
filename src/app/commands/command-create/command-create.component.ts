import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandCreateService } from './command-create.service';
import { CommandModel } from '../../../interface/command.interface';
import { MatSelect } from '@angular/material/select';
import { BuyerModel } from 'src/interface/buyer.interface';
import { OrderModel } from '../../../interface/order.interface';
import { ProductModel } from 'src/interface/product.interface';


let ELEMENT_DATA_Buyer: BuyerModel[];
let ELEMENT_DATA_PRODUCT: ProductModel[];

@Component({
  selector: 'command-create',
  templateUrl: './command-create.component.html',
  styleUrls: ['./command-create.component.css']
})

export class CommandsCreateComponent {

  orders: { productName: string, quantity: number, productId: number, }[] = [];

  dataSourceProducts = [
    { productName: '' }];

  selectValueSelected = false;

  buyerNameSelect: string = "";

  buyerIDSelect: number = 0;

  productSelectedName: string = "";

  productSelectedID: number = 0;

  order: OrderModel;

  selectedBuyerName: BuyerModel = new BuyerModel();

  commandModel = new CommandModel();

  messageTime: number = 5000;

  constructor(private commandCreateService: CommandCreateService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {
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

  addOrder() {
    this.orders.push({ productName: '', quantity: 0, productId: 0, });
    console.log("quantidade de pedidos:" + this.orders.length);
  };

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
    this.commandCreateService.listBuyer().subscribe(list => {
      ELEMENT_DATA_Buyer = list;
      this.dataSourceBuyer = ELEMENT_DATA_Buyer;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  listProducts() {
    this.commandCreateService.listProducts().subscribe(list => {
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
      this.authenticatedUser();
      this.commandModel.buyerId = this.buyerIDSelect;
      this.commandModel.buyerName = this.buyerNameSelect;
      this.selectValueSelected = true;
      this.commandCreateService.saveClient(this.commandModel).subscribe(client => {
        this.commandModel.commandId = client;
        this.successMessage();
      }, err => {
        this._snackBar.open('Erro ao cadastrar o novo cliente "' + this.commandModel.buyerName + '" foi cadastrada com sucesso!', '', {
          duration: 2000
        });
        console.log('Erro ao cadastrar o novo cliente "' + this.commandModel.buyerName + '", necessário refazer o procedimento!', err);
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
      this.commandCreateService.saveCommand(orderModel).subscribe(command => {
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

  public authenticatedUser(){
    // 👉️ User Login
    const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.commandModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.commandModel.userName = userNameLogin.value;
    }
}

public successMessage(){
this._snackBar.open('A comanda "'+ this.commandModel.buyerName +'" foi cadastrado com sucesso!','', {
  duration: this.messageTime
});
}

public errorMessage(){
this._snackBar.open('Erro ao cadastrar a comanda "'+ this.commandModel.buyerName +'" !','', {
  duration: this.messageTime
});
}
}