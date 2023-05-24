import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentCreateService } from './payment-create.service';
import { PaymentModel } from '../../../interface/payment.interface';
import { CommandModel } from 'src/interface/command.interface';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';
import { CommandListService } from 'src/app/command/command-list/command-list.service';
import { FormOfPaymentListService } from 'src/app/formofpayment/formofpayment-list/formofpayment-list.service';

let ELEMENT_DATA_COMMAND: CommandModel[];
let ELEMENT_DATA_FORM_OF_PAYMENT: FormOfPaymentModel[];

@Component({
  selector: 'payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})

export class PaymentCreateComponent implements OnInit{

  commandSelected: string = "";

  commandSelectedID: number = 0;

  formOfPaymentSelected: string = "";

  formOfPaymentSelectedID: number = 0;

  paymentModel = new PaymentModel();

  messageTime: number = 5000;

  selectedPaymentType = 'Total';

  constructor(private paymentCreateService: PaymentCreateService,
    private commandListService: CommandListService, 
    private formOfPaymentListService: FormOfPaymentListService, 
    private _snackBar: MatSnackBar,  
    private readonly router: Router) { }

  ngOnInit(): void {
    this.listCommand();
    this.listFormOfPayment();
  }

  listCommand() {
    this.commandListService.listCommandStatus(1).subscribe(command => {
      ELEMENT_DATA_COMMAND = command;
      this.dataSourceCommand = ELEMENT_DATA_COMMAND;
    }, err => {
      console.log('Erro ao listar as comandas ', err);
    })
  }

  changeCommand(event: any) {
    this.commandSelectedID = event.commandId;
    this.commandSelected = event.buyerName;
  }
  
  listFormOfPayment() {
    this.formOfPaymentListService.list().subscribe(formOfPayment => {
      ELEMENT_DATA_FORM_OF_PAYMENT = formOfPayment;
      this.dataSourceFormOfPayment = ELEMENT_DATA_FORM_OF_PAYMENT;
    }, err => {
      console.log('Erro ao listar as formas de pagamentos ', err);
    })
  }
 
  changeFormOfPayment(event: any) {
    this.formOfPaymentSelectedID = event.formOfPaymentId;
    this.formOfPaymentSelected = event.formOfPaymentName;
  }

  dataSourceCommand = ELEMENT_DATA_COMMAND;
  dataSourceFormOfPayment = ELEMENT_DATA_FORM_OF_PAYMENT;

  save() {
    this.authenticatedUser();
    this.paymentModel.commandId = this.commandSelectedID;
    this.paymentModel.formOfPaymentId = this.formOfPaymentSelectedID;
    this.paymentModel.formOfPaymentName = this.formOfPaymentSelected;
    console.log(this.paymentModel);
    //checkFields
    if(this.paymentModel.commandId == 0)
    {
      this._snackBar.open('A comanda não foi selecionada, necessário selecionar uma comanda para cadastrar o pagamento!','', {
        duration: this.messageTime
      });
    }

    if(this.paymentModel.formOfPaymentId == 0)
    {
      this._snackBar.open('A forma de pagamento não foi selecionada, necessário selecionar uma forma de pagamento para cadastrar o pagamento!','', {
        duration: this.messageTime
      });
    }

    //save
    if(this.paymentModel.commandId > 0 && this.paymentModel.formOfPaymentId > 0)
    {
      this.authenticatedUser();
      this.paymentCreateService.save(this.paymentModel).subscribe(user => {
        this.successMessage();
        this.paymentList();
      }, err => {
        this.errorMessage()
        console.log('Erro ao cadastrar o pagamento número "'+ this.paymentModel.paymentId +'", necessário refazer o procedimento!', err);
      })
    }
  }

  reply(){
    this.router.navigate(['main']);
  }

  paymentList(){
    this.router.navigate(['payment-list']);
  }

  public authenticatedUser(){
        // 👉️ User Login
        const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
        if (userIdLogin != null) {
          this.paymentModel.userId = parseInt(userIdLogin.value);
        }
        const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
        if (userIdLogin != null) {
          this.paymentModel.userName = userNameLogin.value;
        }
  }

  public successMessage(){
    this._snackBar.open('O pagamento foi cadastrado com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar o pagamento !','', {
      duration: this.messageTime
    });
  }
}