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

  //Property MessageSuccess
  private _messageSuccess: string = '';
  get messageSuccess() { return this._messageSuccess; }
  set messageSuccess(value) { this._messageSuccess = value; }

  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }


  constructor(private buyerCreateService: BuyerCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }

  save() {
    
    //check fields
    if(this.buyerModel.buyerName == "")
    {
      this._snackBar.open('Não está preenchido o campo nome do cliente!', 'Voltar', {
        duration: this.messageTime
      });
    }
    if(this.buyerModel.buyerAddress == "")
    {
      this._snackBar.open('Não está preenchido o campo endereço do cliente!', 'Voltar',{
        duration: this.messageTime
      });
    }
    if(this.buyerModel.buyerPhone == "")
    {
      this._snackBar.open('Não está preenchido o campo telefone do cliente!', 'Voltar',{
        duration: this.messageTime
      });
    }

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

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  buyerList(){
    this.routerString = 'buyer-list';
    this.router.navigate([this.routerString]);
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

  public successMessage(){
    this.messageSuccess = 'O cliente foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + this.buyerModel.buyerName ,'', {
      duration: this.messageTime
    });
  }

  public errorMessage():void{
    this.messageErro = 'Erro ao cadastrar o cliente!';
    this._snackBar.open(this.messageErro + this.buyerModel.buyerName,'', {
      duration: this.messageTime
    });
  }
}




