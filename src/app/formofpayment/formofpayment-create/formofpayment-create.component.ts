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

  formOfPaymentModel = new FormOfPaymentModel();

  messageTime: number = 5000;

  constructor(private formOfPaymentCreateService: FormOfPaymentCreateService,
    private _snackBar: MatSnackBar, private readonly router: Router) {
  }

  save() {
    console.log(this.formOfPaymentModel);
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
        console.log(this.formOfPaymentModel);
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
    this._snackBar.open('A forma de pagamento "'+ this.formOfPaymentModel.formOfPaymentName +'" foi cadastrada com sucesso!','', {
    duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar a forma de pagamento "'+ this.formOfPaymentModel.formOfPaymentName +'" !','', {
    duration: this.messageTime
    });
  }
}