import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyAssetCreateService } from './companyAsset-create.service';
import { CompanyAssetModel } from '../../../interface/companyAsset.interface';

@Component({
  selector: 'companyAsset-create',
  templateUrl: './companyAsset-create.component.html',
  styleUrls: ['./companyAsset-create.component.css']
})

export class CompanyAssetCreateComponent {

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
  
  //Property CompanyAssetModelModel
  private _companyAssetModel = new CompanyAssetModel();
  get companyAssetModel() { return this._companyAssetModel; }
  set companyAssetModel(value) { this._companyAssetModel = value; }
 
  // #endregion

  //#region [Constructor]
  
  constructor(private companyAssetCreateService: CompanyAssetCreateService,
              private _snackBar: MatSnackBar, 
              private readonly router: Router) {
  }

  // #endregion

  //#region [Methods]
  save() {
    console.log(this.companyAssetModel);

    this.companyAssetModel.costPrice = parseFloat(this.companyAssetModel.costPrice).toString(); //parseFloat(priceCost)

    //checkFields
    if(this.companyAssetModel.companyAssetName == "")
    {
      this._snackBar.open('O nome do ativo da empresa está vazio, precisa preencher!','', {
        duration: this.messageTime
      });
    }

    //Date update default
    this.companyAssetModel.dateUpdate = new Date(1900, 1, 1, 1, 1, 1, 1);

    //save
    if (this.companyAssetModel.companyAssetName != '') {
      this.authenticatedUser();
      this.companyAssetCreateService.save(this.companyAssetModel).subscribe(companyAsset => {
        this.successMessage();
        this.companyAssetList();  
      }, err => {
        this.errorMessage();
        console.log('Erro ao adicionar o novo ativo da empresa!', err);
      })
    }
  }

  reply() {
    this.router.navigate(['main']);
  }
  
  companyAssetList(){
    this.router.navigate(['companyAsset-list']);
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
    this.secondSuccessMessage = 'foi cadastrado com sucesso!';
    this._snackBar.open(this.firstSuccessMessage + ' ' + this.companyAssetModel.companyAssetName + ' ' + this.secondSuccessMessage, '', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar o ativo da empresa!','', {
    duration: this.messageTime
    });
  }
}
  // #endregion