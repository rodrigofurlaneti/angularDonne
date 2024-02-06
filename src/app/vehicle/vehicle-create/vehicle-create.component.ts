import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleCreateService } from './vehicle-create.service';
import { VehicleModel } from '../../../interface/vehicle.interface';

@Component({
  selector: 'vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})

export class VehicleCreateComponent {
  
  //#region [Properties]
  //Property BrandModel
  private _vehicleModel = new VehicleModel();
  get vehicleModel() { return this._vehicleModel; }
  set vehicleModel(value) { this._vehicleModel = value; }

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
  
  constructor(private vehicleCreateService: VehicleCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  save():void {
    //save
    if(this.vehicleModel.vehicleBrandName != "" )
    {
      this.vehicleCreateService
          .save(this.vehicleModel)
          .subscribe(brand => {
        this.successMessage();
        this.brandList();
        }, err => {
          this.errorMessage();
        })
      }
    }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  brandList(){
    this.routerString = 'brand-list';
    this.router.navigate([this.routerString]);
  }

  successMessage():void{
    this.messageSuccess = 'O veículo foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + this.vehicleModel.plate ,'', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar o veículo!';
    this._snackBar.open(this.messageErro + this.vehicleModel.plate,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}