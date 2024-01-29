import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleTypeCreateService } from './vehicleType-create.service';
import { VehicleTypeModel } from '../../../interface/vehicleType.interface';

@Component({
  selector: 'vehicleType-create',
  templateUrl: './vehicleType-create.component.html',
  styleUrls: ['./vehicleType-create.component.css']
})

export class VehicleTypeCreateComponent {
  
  //#region [Properties]
  //Property VehicleTypeModel
  private _vehicleTypeModel = new VehicleTypeModel();
  get vehicleTypeModel() { return this._vehicleTypeModel; }
  set vehicleTypeModel(value) { this._vehicleTypeModel = value; }

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

  //Property MessageVehicleTypeName
  private _messageVehicleTypeName: string = '';
  get messageVehicleTypeName() { return this._messageVehicleTypeName; }
  set messageVehicleTypeName(value) { this._messageVehicleTypeName = value; }

  //Property MessageVehicleTypeAddress
  private _messageVehicleTypeAddress: string = '';
  get messageVehicleTypeAddress() { return this._messageVehicleTypeAddress; }
  set messageVehicleTypeAddress(value) { this._messageVehicleTypeAddress = value; }
    
  //Property MessageVehicleTypePhone
  private _messageVehicleTypePhone: string = '';
  get messageVehicleTypePhone() { return this._messageVehicleTypePhone; }
  set messageVehicleTypePhone(value) { this._messageVehicleTypePhone = value; }
  
  // #endregion

  //#region [Constructor]
  
  constructor(private vehicleTypeCreateService: VehicleTypeCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  save():void {
    //save
    if(this.vehicleTypeModel.vehicleTypeName != "" )
    {
      this.vehicleTypeCreateService
          .save(this.vehicleTypeModel)
          .subscribe(vehicleType => {
        this.successMessage();
        this.VehicleTypeList();
        }, err => {
          this.errorMessage();
        })
      }
    }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  VehicleTypeList(){
    this.routerString = 'VehicleType-list';
    this.router.navigate([this.routerString]);
  }

  successMessage():void{
    this.messageSuccess = 'O cliente foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + this.vehicleTypeModel.vehicleTypeName ,'', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar o cliente!';
    this._snackBar.open(this.messageErro + this.vehicleTypeModel.vehicleTypeName,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}