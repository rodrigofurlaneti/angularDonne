import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuyerCreateService } from './buyer-create.service';
import { BuyerModel } from '../../../interface/buyer.interface';

@Component({
  selector: 'buyer-create',
  templateUrl: './buyer-create.component.html',
  styleUrls: ['./buyer-create.component.css']
})

export class BuyerCreateComponent {
  
  //#region [Properties]
  //Property BuyerModel
  private _buyerModel = new BuyerModel();
  get buyerModel() { return this._buyerModel; }
  set buyerModel(value) { this._buyerModel = value; }

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

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
  
  // #endregion

  //#region [Constructor]
  
  constructor(private buyerCreateService: BuyerCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  save():void {
    console.log(this.buyerModel);
    //check fields
    if(this.buyerModel.buyerName == "")
    {
      this.messageBuyerName = 'Não está preenchido o campo nome do cliente!';
      this._snackBar.open(this.messageBuyerName, 'Voltar', {
        duration: this.messageTime
      });
    }
    if(this.buyerModel.buyerAddress == "")
    {
      this.messageBuyerAddress = 'Não está preenchido o campo endereço do cliente!'; 
      this._snackBar.open(this.messageBuyerAddress, 'Voltar',{
        duration: this.messageTime
      });
    }
    if(this.buyerModel.buyerPhone == "")
    {
      this.messageBuyerPhone = 'Não está preenchido o campo telefone do cliente!'; 
      this._snackBar.open(this.messageBuyerPhone, 'Voltar',{
        duration: this.messageTime
      });
    }

    this.buyerModel.dateUpdate = new Date(1900, 1, 1, 1, 1, 1, 1);
    
    //save
    if(this.buyerModel.buyerName != "" && this.buyerModel.buyerAddress != "" && this.buyerModel.buyerPhone != "")
    {
      this.authenticatedUser();
      this.buyerCreateService.save(this.buyerModel).subscribe(buyer => {
        this.successMessage();
        this.buyerList();
        }, err => {
          this.errorMessage();
        })
      }
    }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  buyerList(){
    this.routerString = 'buyer-list';
    this.router.navigate([this.routerString]);
  }

  authenticatedUser():void{
    // 👉️ User Login
    const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
    if (userIdLogin != null)
    {
      this.buyerModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.buyerModel.userName = userNameLogin.value;
    }
  }

  successMessage():void{
    this.firstSuccessMessage = 'O cliente';
    this.secondSuccessMessage = 'foi cadastrado com sucesso!';
    this._snackBar.open(this.firstSuccessMessage + ' ' + this.buyerModel.buyerName + ' ' + this.secondSuccessMessage, '', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar o cliente!';
    this._snackBar.open(this.messageErro + this.buyerModel.buyerName,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}