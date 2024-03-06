import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { BuyerUpdateService } from './buyer-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuyerModel } from 'src/interface/buyer.interface';

let ELEMENT_DATA: BuyerModel[];

@Component({
  selector: 'buyer-update',
  templateUrl: './buyer-update.component.html',
  styleUrls: ['./buyer-update.component.css']
})

export class BuyerUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }

  //Property FirstSuccessMessage
  private _firstSuccessMessage: string = '';
  get firstSuccessMessage() { return this._firstSuccessMessage; }
  set firstSuccessMessage(value) { this._firstSuccessMessage = value; }

  //Property SecondSuccessMessage
  private _secondSuccessMessage: string = '';
  get secondSuccessMessage() { return this._secondSuccessMessage; }
  set secondSuccessMessage(value) { this._secondSuccessMessage = value; }
  
  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

  //Property MessageBuyerName
  private _messageBuyerName: string = '';
  get messageBuyerName() { return this._messageBuyerName; }
  set messageBuyerName(value) { this._messageBuyerName = value; }
  
  //Property MessageBuyerAddress
  private _messageBuyerAddress: string = '';
  get messageBuyerAddress() { return this._messageBuyerAddress; }
  set messageBuyerAddress(value) { this._messageBuyerAddress = value; }
      
  //Property MessageBuyerPhone
  private _messageBuyerPhone: string = '';
  get messageBuyerPhone() { return this._messageBuyerPhone; }
  set messageBuyerPhone(value) { this._messageBuyerPhone = value; }

  //Property BuyerModel
  private _buyerModel = new BuyerModel();
  get buyerModel() { return this._buyerModel; }
  set buyerModel(value) { this._buyerModel = value; }

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

  // #endregion

  //#region [Constructor]
  constructor(private buyerUpdateService: BuyerUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  //#endregion
  
  //#region [Methods]

  ngOnInit(): void {
    this.list();   
    this.hideUpdateButton(); 
  }

  hideUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'none';
  }

  showUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'none';
  }

  list() {
    this.buyerUpdateService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log('Erro ao listar os clientes!', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.buyerUpdateService.getById(id)
                              .subscribe(buyer => { 
                                this.buyerModel.buyerId = buyer.buyerId;
                                this.buyerModel.buyerName = buyer.buyerName;
                                this.buyerModel.buyerAddress = buyer.buyerAddress;
                                this.buyerModel.buyerPhone = buyer.buyerPhone;
                                this.buyerModel.dateInsert = buyer.dateInsert;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<BuyerModel>();

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public update() {

    this.buyerModel = this.checkFields(this.buyerModel);

    //update
    if(this.buyerModel.buyerName != "" && this.buyerModel.buyerAddress != "" && this.buyerModel.buyerPhone != "")
    {
      this.authenticatedUser();
      this.buyerUpdateService.update(this.buyerModel).subscribe(buyer => { 
        this.successMessage();
        this.reply();
      }, err => {
        this.errorMessage();
      });
    }
  }

  public checkFields(objBuyerModel : BuyerModel) : BuyerModel
  {
    if(objBuyerModel.buyerName == "")
    {
      this.messageBuyerName = 'Não está preenchido o campo nome do cliente!';
      this._snackBar.open(this.messageBuyerName,'', {
        duration: this.messageTime
      });
    }
    if(objBuyerModel.buyerAddress == "")
    {
      this.messageBuyerAddress = 'Não está preenchido o campo endereço do cliente!'; 
      this._snackBar.open(this.messageBuyerAddress,'', {
        duration: this.messageTime
      });
    }
    if(objBuyerModel.buyerPhone == "")
    {
      this.messageBuyerPhone = 'Não está preenchido o campo telefone do cliente!';
      this._snackBar.open(this.messageBuyerPhone,'', {
        duration: this.messageTime
      });
    }
    return objBuyerModel;
  }

  public authenticatedUser(){
    // 👉️ User Login
    const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.buyerModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.buyerModel.userName = userNameLogin.value;
    }
  }

  public successMessage():void{
    this.firstSuccessMessage = 'Os dados do cliente';
    this.secondSuccessMessage = 'foram atualizados com sucesso!';
    this._snackBar.open(this.firstSuccessMessage + ' ' + this.buyerModel.buyerName + ' ' + this.secondSuccessMessage, '', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao atualizar os dados do cliente!'
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}