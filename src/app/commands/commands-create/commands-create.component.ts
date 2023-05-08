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

  changeProduct(event: any) {
    console.log(event);
    this.productSelectedID = event.productId;
    this.productSelectedName = event.productName;
    console.log(event.productName);
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
      }, err => {
        this._snackBar.open('Erro ao cadastrar o novo cliente "' + this.commandsModel.buyerName + '" foi cadastrada com sucesso!', '', {
          duration: 2000
        });
        console.log('Erro ao cadastrar o novo cliente "' + this.commandsModel.buyerName + '", necessário refazer o procedimento!', err);
      })
    }
  }

  saveCommand() {

    //checkFields
    if (this.order.productName == "") {
      this._snackBar.open('O cliente não foi seleciona, precisa selecionar!', '', {
        duration: 2000
      });
    }

    //save
    if (this.order.productName != "") {
      var amount = (<HTMLSelectElement>document.getElementById('quantity')).value;
      var orderModel = new OrderModel();
      orderModel.clientName = this.buyerNameSelect;
      orderModel.clientId = this.buyerIDSelect;
      orderModel.productName = this.productSelectedName;
      orderModel.productId = this.productSelectedID;
      orderModel.amount = parseInt(amount);
      orderModel.userId = parseInt(this.userIdService.userID);
      orderModel.userName = this.userNameService.userName;
      orderModel.storeName = this.storeNameService.storeName;
      orderModel.storeId = parseInt(this.storeIdService.storeId);
      console.log(orderModel);

      this.commandsCreateService.saveCommand(orderModel).subscribe(command => {
        this._snackBar.open('O cliente "' + this.selectedBuyerName.buyerName + '" foi salvo na comanda com sucesso!', '', {
          duration: 2000
        });
      }, err => {
        this._snackBar.open('Erro ao salvar o cliente"' + this.selectedBuyerName.buyerName + '", necessário refazer o procedimento!', '', {
          duration: 2000
        });
        console.log('Erro ao salvar o cliente"' + this.selectedBuyerName.buyerName + '", necessário refazer o procedimento!', err);
      })
    }
  }

  dataSourceBuyer = ELEMENT_DATA_Buyer;
  dataSourceProducts = ELEMENT_DATA_PRODUCT;

  reply() {
    this.router.navigate(['main']);
  }

  commandsList() {
    this.router.navigate(['main']);
  }

  //EM PRODUÇÃO//
  addNewDiv() {
    const newDiv = this.renderer.createElement('div');
    this.renderer.addClass(newDiv, 'contant'); // Adicione a classe desejada
    const h3 = this.renderer.createElement('h3');
    const text = this.renderer.createText('Nova div');
    this.renderer.appendChild(h3, text);
    const orderRow = this.renderer.createElement('div');
    this.renderer.addClass(orderRow, 'order_row'); // Adicione a classe desejada
    const matFormField1 = this.renderer.createElement('mat-form-field');
    const matLabel1 = this.renderer.createElement('mat-label');
    const text1 = this.renderer.createText('Produto');
    this.renderer.appendChild(matLabel1, text1);
    const matSelect = this.renderer.createElement('mat-select');
    this.renderer.setAttribute(matSelect, 'id', 'dropDownListProduct');
    this.renderer.setAttribute(matSelect, 'name', 'dropDownListProduct');
    const inputElement1 = this.renderer.createElement('input');
    this.renderer.setAttribute(inputElement1, 'id', 'quantity');
    this.renderer.setAttribute(inputElement1, 'name', 'quantity');
    this.renderer.setAttribute(inputElement1, 'type', 'number');
    this.renderer.setAttribute(inputElement1, 'matInput', '');

    // Adicione os elementos criados à nova div
    this.renderer.appendChild(matFormField1, matLabel1);
    this.renderer.appendChild(matSelect, inputElement1);
    this.renderer.appendChild(orderRow, matFormField1);
    this.renderer.appendChild(orderRow, matSelect);
    this.renderer.appendChild(newDiv, h3);
    this.renderer.appendChild(newDiv, orderRow);

  }
}