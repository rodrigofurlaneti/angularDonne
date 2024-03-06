import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyAssetUpdateService } from './companyAsset-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyAssetModel } from 'src/interface/companyAsset.interface';

let ELEMENT_DATA: CompanyAssetModel[];

@Component({
  selector: 'companyAsset-update',
  templateUrl: './companyAsset-update.component.html',
  styleUrls: ['./companyAsset-update.component.css']
})

export class CompanyAssetUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name','costPrice'];
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

  //Property CompanyAssetModel
  private _companyAssetModel = new CompanyAssetModel();
  get companyAssetModel() { return this._companyAssetModel; }
  set companyAssetModel(value) { this._companyAssetModel = value; }

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
  private _dataSource: CompanyAssetModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<CompanyAssetModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }

  // #endregion

  // #region [Constructor]

  constructor(private companyAssetUpdateService: CompanyAssetUpdateService,
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
    this.companyAssetUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar os ativos da empresa!', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.companyAssetUpdateService.getById(id)
      .subscribe(companyAsset => {
        this.isIdZero = false;
        this.isIdGreaterThanZero = true;
        this.companyAssetModel.dateUpdate = companyAsset.dateUpdate;
        this.companyAssetModel.dateInsert = companyAsset.dateInsert;
        this.companyAssetModel.companyAssetId = companyAsset.companyAssetId;
        this.companyAssetModel.companyAssetName = companyAsset.companyAssetName;
        this.companyAssetModel.dateInsert = companyAsset.dateInsert;
      });
  }




  reply() {
    this.router.navigate(['main']);
  }

  public update() {

    //check fields
    if (this.companyAssetModel.companyAssetName == "") {
      this._snackBar.open('Não está preenchido o campo nome do ativo da empresa!','', {
        duration: this.messageTime
      });
    }

    //update
    if (this.companyAssetModel.companyAssetName != "") {
      this.companyAssetUpdateService.update(this.companyAssetModel).subscribe(companyAsset => {
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
      this.companyAssetModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.companyAssetModel.userName = userNameLogin.value;
    }
  }

  public successMessage():void{
    this.firstSuccessMessage = 'O ativo da empresa';
    this.secondSuccessMessage = 'foi atualizado com sucesso!';
    this._snackBar.open(this.firstSuccessMessage + ' ' + this.companyAssetModel.companyAssetName + ' ' + this.secondSuccessMessage, '', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao atualizar o ativo da empresa!','', {
      duration: this.messageTime
    });
  }

  //#endregion
}