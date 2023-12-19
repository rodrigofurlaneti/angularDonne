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
  
  //Property OrderModel
  private _paymentModel = new PaymentModel();
  get paymentModel() { return this._paymentModel; }
  set paymentModel(value) { this._paymentModel = value; }

  //Property CommandSelected
  private _commandSelected: string = "";
  get commandSelected() { return this._commandSelected; }
  set commandSelected(value) { this._commandSelected = value; }

  //Property CommandSelectedID 
  private _commandSelectedID: number = 0;
  get commandSelectedID() { return this._commandSelectedID; }
  set commandSelectedID(value) { this._commandSelectedID = value; }

  //Property ProductSelected 
  private _productSelected: string = "";
  get productSelected() { return this._productSelected; }
  set productSelected(value) { this._productSelected = value; }

  //Property ProductSelectedID
  private _productSelectedID: number = 0;
  get productSelectedID() { return this._productSelectedID; }
  set productSelectedID(value) { this._productSelectedID = value; }

  //Property ProductSelectedID
  private _totalValue: number = 0;
  get totalValue() { return this._totalValue; }
  set totalValue(value) { this._totalValue = value; }

  //Property FormOfPaymentSelected
  private _formOfPaymentSelected: string = "";
  get formOfPaymentSelected() { return this._formOfPaymentSelected; }
  set formOfPaymentSelected(value) { this._formOfPaymentSelected = value; }

  //Property SelectedPaymentType
  private _selectedPaymentType: string = 'Total';
  get selectedPaymentType() { return this._selectedPaymentType; }
  set selectedPaymentType(value) { this._selectedPaymentType = value; }

  //Property FormOfPaymentSelectedID
  private _formOfPaymentSelectedID: number = 0;
  get formOfPaymentSelectedID() { return this._formOfPaymentSelectedID; }
  set formOfPaymentSelectedID(value) { this._formOfPaymentSelectedID = value; }
  
// #endregion

// #region [Constructor]

  constructor(private paymentCreateService: PaymentCreateService,
    private commandListService: CommandListService, 
    private formOfPaymentListService: FormOfPaymentListService, 
    private _snackBar: MatSnackBar,  
    private readonly router: Router) { }

// #endregion

// #region [Methods]

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
    //checkFields
    if(this.paymentModel.commandId == 0)
    {
      this.messageErro = 'A comanda não foi selecionada, necessário selecionar uma comanda para cadastrar o pagamento!';
      this._snackBar.open(this.messageErro,'', {
        duration: this.messageTime
      });
    }

    if(this.paymentModel.formOfPaymentId == 0)
    {
      this._messageErro = 'A forma de pagamento não foi selecionada, necessário selecionar uma forma de pagamento para cadastrar o pagamento!';
      this._snackBar.open(this._messageErro,'', {
        duration: this.messageTime
      });
    }

    //save
    if(this.paymentModel.commandId > 0 && this.paymentModel.formOfPaymentId > 0)
    {
      this.authenticatedUser();
      this.paymentCreateService.save(this.paymentModel)
        .subscribe(user => {
        this.successMessage();
        this.paymentList();
      }, err => {
        this.errorMessage()
        this._messageErro = 'Erro ao cadastrar o pagamento número "'+ this.paymentModel.paymentId +'", necessário refazer o procedimento!';
        console.log(this._messageErro, err);
      })
    }
  }

  reply(){
    this._routerString = 'main';
    this.router.navigate([this._routerString]);
  }

  paymentList(){
    this._routerString = 'payment-list';
    this.router.navigate([this._routerString]);
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
    this._messageSuccess = 'O pagamento foi cadastrado com sucesso!';
    this._snackBar.open(this._messageSuccess,'', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._messageErro = 'Erro ao cadastrar o pagamento !';
    this._snackBar.open(this._messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}