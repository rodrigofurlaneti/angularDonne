import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrandCreateService } from './brand-create.service';
import { BrandModel } from '../../../interface/brand.interface';

@Component({
  selector: 'brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})

export class BrandCreateComponent {
  
  //#region [Properties]
  //Property BrandModel
  private _brandModel = new BrandModel();
  get brandModel() { return this._brandModel; }
  set brandModel(value) { this._brandModel = value; }

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

  //Property MessageBrandName
  private _messageBrandName: string = '';
  get messageBrandName() { return this._messageBrandName; }
  set messageBrandName(value) { this._messageBrandName = value; }

  // #endregion

  //#region [Constructor]
  
  constructor(private brandCreateService: BrandCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  save():void {
    //save
    if(this.brandModel.brandName != "" )
    {
      this.brandCreateService
          .save(this.brandModel)
          .subscribe(brand => {
        this.successMessage();
        this.BrandList();
        }, err => {
          this.errorMessage();
        })
      }
    }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  BrandList(){
    this.routerString = 'brand-list';
    this.router.navigate([this.routerString]);
  }

  successMessage():void{
    this.messageSuccess = 'A marca de veículo foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + this.brandModel.brandName ,'', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar a marca d0 veículo!';
    this._snackBar.open(this.messageErro + this.brandModel.brandName,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}