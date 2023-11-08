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
  
  buyerModel = new BuyerModel();

  messageTime: number = 5000;

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
    this.router.navigate(['main']);
  }

  buyerList(){
    this.router.navigate(['buyer-list']);
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
    this._snackBar.open('O cliente "'+ this.buyerModel.buyerName +'" foi cadastrado com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar o cliente "'+ this.buyerModel.buyerName +'" !','', {
      duration: this.messageTime
    });
  }
}




