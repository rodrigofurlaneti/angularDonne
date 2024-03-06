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

  //Property FormOfPaymentModel
  private _formOfPaymentModel = new FormOfPaymentModel();
  get formOfPaymentModel() { return this._formOfPaymentModel; }
  set formOfPaymentModel(value) { this._formOfPaymentModel = value; }

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

  //Property DataSource
  private _dataSource: FormOfPaymentModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<FormOfPaymentModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }

  // #endregion

  // #region [Constructor]

  constructor(private formOfPaymentUpdateService: FormOfPaymentUpdateService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  // #endregion  

  // #region [Methods]

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
        this.formOfPaymentModel.dateInsert = formOfPayment.dateInsert;
      });
  }




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

  public successMessage():void{
    this.firstSuccessMessage = 'A forma de pagamento';
    this.secondSuccessMessage = 'foi atualizada com sucesso!';
    this._snackBar.open(this.firstSuccessMessage + ' ' + this.formOfPaymentModel.formOfPaymentName + ' ' + this.secondSuccessMessage, '', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao atualizar a forma de pagamento!','', {
      duration: this.messageTime
    });
  }

  //#endregion
}