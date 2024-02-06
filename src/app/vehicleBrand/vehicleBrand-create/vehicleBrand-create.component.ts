import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleBrandCreateService } from './vehicleBrand-create.service';
import { VehicleBrand } from '../../../interface/vehicleBrand.interface';

@Component({
  selector: 'vehicleBrand-create',
  templateUrl: './vehicleBrand-create.component.html',
  styleUrls: ['./vehicleBrand-create.component.css']
})

export class VehicleBrandCreateComponent {
  
  //#region [Properties]
  //Property VehicleBrand
  private _vehicleBrand = new VehicleBrand();
  get vehicleBrand() { return this._vehicleBrand; }
  set vehicleBrand(value) { this._vehicleBrand = value; }

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

  //Property MessageVehicleBrandName
  private _messageVehicleBrandName: string = '';
  get messageVehicleBrandName() { return this._messageVehicleBrandName; }
  set messageVehicleBrandName(value) { this._messageVehicleBrandName = value; }
  
  // #endregion

  //#region [Constructor]
  
  constructor(private vehicleBrandCreateService: VehicleBrandCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  save():void {
    //check fields
    if(this.vehicleBrand.vehicleBrandName == "")
    {
      this.messageVehicleBrandName = 'Não está preenchido o campo nome da marca do veículo!';
      this._snackBar.open(this.messageVehicleBrandName, 'Voltar', {
        duration: this.messageTime
      });
    }
    
    //save
    if(this.vehicleBrand.vehicleBrandName != "")
    {
      this.vehicleBrandCreateService.save(this.vehicleBrand).subscribe(vehicleBrandResponse => {
        this.successMessage();
        this.vehicleBrandList();
        }, err => {
          this.errorMessage();
        })
      }
    }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  vehicleBrandList(){
    this.routerString = 'vehicleBrand-list';
    this.router.navigate([this.routerString]);
  }

  successMessage():void{
    this.messageSuccess = 'A marca do veículo foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + this.vehicleBrand.vehicleBrandName ,'', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar a marca do veículo!';
    this._snackBar.open(this.messageErro + this.vehicleBrand.vehicleBrandName,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}