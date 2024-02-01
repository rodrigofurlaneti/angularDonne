import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleModelCreateService } from './vehicleModel-create.service';
import { VehicleModel } from '../../../interface/vehicleModel.inteface';

@Component({
  selector: 'vehicleModel-create',
  templateUrl: './vehicleModel-create.component.html',
  styleUrls: ['./vehicleModel-create.component.css']
})

export class VehicleModelCreateComponent {
  
  //#region [Properties]
  //Property VehicleModelVehicleModel
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

  //Property MessageVehicleModelName
  private _messageVehicleModelName: string = '';
  get messageVehicleModelName() { return this._messageVehicleModelName; }
  set messageVehicleModelName(value) { this._messageVehicleModelName = value; }
  
  // #endregion

  //#region [Constructor]
  
  constructor(private vehicleModelCreateService: VehicleModelCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  save():void {
    //check fields
    if(this.vehicleModel.vehicleModelName == "")
    {
      this.messageVehicleModelName = 'Não está preenchido o campo nome do VehicleModelo do veículo!';
      this._snackBar.open(this.messageVehicleModelName, 'Voltar', {
        duration: this.messageTime
      });
    }
    
    //save
    if(this.vehicleModel.vehicleModelName != "")
    {
      this.vehicleModelCreateService.save(this.vehicleModel).subscribe(vehicleModelResponse => {
        this.successMessage();
        this.vehicleModelList();
        }, err => {
          this.errorMessage();
        })
      }
    }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  vehicleModelList(){
    this.routerString = 'vehicleModel-list';
    this.router.navigate([this.routerString]);
  }

  successMessage():void{
    this.messageSuccess = 'O modelo do veículo foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + this.vehicleModel.vehicleModelName ,'', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar o modelo do veículo!';
    this._snackBar.open(this.messageErro + this.vehicleModel.vehicleModelName,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}