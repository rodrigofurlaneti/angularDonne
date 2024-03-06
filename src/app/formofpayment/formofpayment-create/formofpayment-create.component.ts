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

  //#region [Methods]
  save() {

    //checkFields
    if(this.formOfPaymentModel.formOfPaymentName == "")
    {
      this._snackBar.open('O nome da forma de pagamento está vazio, precisa preencher!','', {
        duration: this.messageTime
      });
    }

    //Date update default
    this.formOfPaymentModel.dateUpdate = new Date(1900, 1, 1, 1, 1, 1, 1);

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

  public successMessage():void{
    this.firstSuccessMessage = 'A forma de pagamento';
    this.secondSuccessMessage = 'foi cadastrada com sucesso!';
    this._snackBar.open(this.firstSuccessMessage + ' ' + this.formOfPaymentModel.formOfPaymentName + ' ' + this.secondSuccessMessage, '', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar a forma de pagamento!','', {
    duration: this.messageTime
    });
  }
}
  // #endregion