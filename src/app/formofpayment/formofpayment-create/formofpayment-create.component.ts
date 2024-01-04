import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentCreateService } from './formofpayment-create.service';
import { FormOfPaymentModel } from '../../../interface/formofpayment.interface';

@Component({
  selector: 'formofpayment-create',
  templateUrl: './formofpayment-create.component.html',
  styleUrls: ['./formofpayment-create.component.css']
})

export class FormOfPaymentCreateComponent {

  //#region [Properties]
  
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
  
  //Property FormOfPaymentModelModel
  private _formOfPaymentModel = new FormOfPaymentModel();
  get formOfPaymentModel() { return this._formOfPaymentModel; }
  set formOfPaymentModel(value) { this._formOfPaymentModel = value; }
 
  // #endregion

  //#region [Constructor]
  
  constructor(private formOfPaymentCreateService: FormOfPaymentCreateService,
              private _snackBar: MatSnackBar, 
              private readonly router: Router) {
  }

  // #endregion

  save() {
    //checkFields
    if(this.formOfPaymentModel.formOfPaymentName == "")
    {
      this._snackBar.open('O nome da forma de pagamento está vazio, precisa preencher!','', {
        duration: this.messageTime
      });
    }

    //save
    if (this.formOfPaymentModel.formOfPaymentName != '') {
      this.authenticatedUser();
      this.formOfPaymentCreateService.save(this.formOfPaymentModel).subscribe(formofpayment => {
        this.successMessage();
        this.formOfPaymentList();  
      }, err => {
        this.errorMessage();
        console.log('Erro ao adicionar a nova forma de pagamento!', err);
      })
    }
  }

  reply() {
    this.router.navigate(['main']);
  }
  
  formOfPaymentList(){
    this.router.navigate(['formofpayment-list']);
  }
  
  public authenticatedUser(){
    // 👉️ User Login
    const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.formOfPaymentModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.formOfPaymentModel.userName = userNameLogin.value;
    }
  }

  public successMessage(){
    this._snackBar.open('A forma de pagamento foi cadastrada com sucesso!','', {
    duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar a forma de pagamento!','', {
    duration: this.messageTime
    });
  }
}