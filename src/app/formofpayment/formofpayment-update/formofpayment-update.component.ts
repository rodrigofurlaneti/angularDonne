import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormOfPaymentUpdateService } from './formofpayment-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

let ELEMENT_DATA: FormOfPaymentModel[];

@Component({
  selector: 'formofpayment-update',
  templateUrl: './formofpayment-update.component.html',
  styleUrls: ['./formofpayment-update.component.css']
})

export class FormOfPaymentUpdateComponent implements OnInit {

  formOfPaymentModel = new FormOfPaymentModel();

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  ids: number = 0;

  messageTime: number = 5000;

  constructor(private formOfPaymentUpdateService: FormOfPaymentUpdateService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

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
    updateBtn.style.display = 'block';
  }

  list() {
    this.formOfPaymentUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as formas de pagamento!', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.formOfPaymentUpdateService.getById(id)
      .subscribe(formOfPayment => {
        this.isIdZero = false;
        this.isIdGreaterThanZero = true;
        this.formOfPaymentModel.dateUpdate = formOfPayment.dateUpdate;
        this.formOfPaymentModel.dateInsert = formOfPayment.dateInsert;
        this.formOfPaymentModel.formOfPaymentId = formOfPayment.formOfPaymentId;
        this.formOfPaymentModel.formOfPaymentName = formOfPayment.formOfPaymentName;
      });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<FormOfPaymentModel>();

  reply() {
    this.router.navigate(['main']);
  }

  public update() {

    //check fields
    if (this.formOfPaymentModel.formOfPaymentName == "") {
      this._snackBar.open('Não está preenchido o campo nome da forma de pagamento!','', {
        duration: this.messageTime
      });
    }

    //update
    if (this.formOfPaymentModel.formOfPaymentName != "") {
      this.formOfPaymentUpdateService.update(this.formOfPaymentModel).subscribe(formOfPayment => {
        this.successMessage();
        this.reply();
      }, err => {
        this.errorMessage();
      });
    }
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
this._snackBar.open('A forma de pagamento "'+ this.formOfPaymentModel.formOfPaymentName +'" foi atualizada com sucesso!','', {
  duration: this.messageTime
});
}

public errorMessage(){
this._snackBar.open('Erro ao atualizar a forma de pagamento "'+ this.formOfPaymentModel.formOfPaymentName +'" !','', {
  duration: this.messageTime
});
}
}