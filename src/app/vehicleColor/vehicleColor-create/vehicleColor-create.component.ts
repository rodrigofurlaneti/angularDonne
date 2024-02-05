import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleColorCreateService } from './vehicleColor-create.service';
import { VehicleColor } from '../../../interface/vehicleColor.interface';

@Component({
  selector: 'vehicleColor-create',
  templateUrl: './vehicleColor-create.component.html',
  styleUrls: ['./vehicleColor-create.component.css']
})

export class VehicleColorCreateComponent {
  
  //#region [Properties]
  //Property VehicleColor
  private _vehicleColor = new VehicleColor();
  get vehicleColor() { return this._vehicleColor; }
  set vehicleColor(value) { this._vehicleColor = value; }

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

  //Property MessageVehicleColorName
  private _messageVehicleColorName: string = '';
  get messageVehicleColorName() { return this._messageVehicleColorName; }
  set messageVehicleColorName(value) { this._messageVehicleColorName = value; }
  
  // #endregion

  //#region [Constructor]
  
  constructor(private vehicleColorCreateService: VehicleColorCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  save():void {
    //check fields
    if(this.vehicleColor.vehicleColorName == "")
    {
      this.messageVehicleColorName = 'Não está preenchido o campo nome da cor do veículo!';
      this._snackBar.open(this.messageVehicleColorName, 'Voltar', {
        duration: this.messageTime
      });
    }
    
    //save
    if(this.vehicleColor.vehicleColorName != "")
    {
      this.vehicleColorCreateService.save(this.vehicleColor).subscribe(VehicleColorResponse => {
        this.successMessage();
        this.VehicleColorList();
        }, err => {
          this.errorMessage();
        })
      }
    }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  VehicleColorList(){
    this.routerString = 'VehicleColor-list';
    this.router.navigate([this.routerString]);
  }

  successMessage():void{
    this.messageSuccess = 'O modelo do veículo foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + this.vehicleColor.vehicleColorName ,'', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar o modelo do veículo!';
    this._snackBar.open(this.messageErro + this.vehicleColor.vehicleColorName,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}