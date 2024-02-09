import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleCreateService } from './vehicle-create.service';
import { VehicleModel } from '../../../interface/vehicle.interface';
import { VehicleTypeModel } from 'src/interface/vehicleType.interface';
import { VehicleTypeListService } from 'src/app/vehicleType/vehicleType-list/vehicleType-list.service';
import { VehicleBrandModel } from 'src/interface/vehicleBrand.interface';
import { VehicleBrandListService } from 'src/app/vehicleBrand/vehicleBrand-list/vehicleBrand-list.service';
import { VehicleModelListService } from 'src/app/vehicleModel/vehicleModel-list/vehicleModel-list.service';
import { VehicleColorModel } from 'src/interface/vehicleColor.interface';
import { VehicleColorListService } from 'src/app/vehicleColor/vehicleColor-list/vehicleColor-list.service';
import { FormControl } from '@angular/forms';
import { DateTime } from 'luxon';

let ELEMENT_DATA_VEHICLE_TYPE: VehicleTypeModel[];
let ELEMENT_DATA_VEHICLE_BRAND: VehicleBrandModel[];
let ELEMENT_DATA_VEHICLE_MODEL: VehicleModel[];
let ELEMENT_DATA_VEHICLE_COLOR: VehicleColorModel[];

@Component({
  selector: 'vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})

export class VehicleCreateComponent {

  //#region [Properties]
  //Property Date
  private _date = DateTime.now().toLocaleString(DateTime.DATE_SHORT);
  get date() { return this._date; }
  set date(value) { this._date = value; }

  //Property Time
  private _time = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
  get time() { return this._time; }
  set time(value) { this._time = value; }

  //Property Entry Date
  private _entryDate = new FormControl({value:this._date, disabled: true});
  get entryDate() { return this._entryDate; }
  set entryDate(value) { this._entryDate = value; }

  //Property Entry Time
  private _entryTime = new FormControl({value:this._time, disabled: true});
  get entryTime() { return this._entryTime; }
  set entryTime(value) { this._entryTime = value; }

  //Property VehicleModel
  private _vehicleModel = new VehicleModel();
  get vehicleModel() { return this._vehicleModel; }
  set vehicleModel(value) { this._vehicleModel = value; }

  //Property VehicleTypeModel
  private _vehicleTypeModel = new VehicleTypeModel();
  get vehicleTypeModel() { return this._vehicleTypeModel; }
  set vehicleTypeModel(value) { this._vehicleTypeModel = value; }

  //Property VehicleBrandModel
  private _vehicleBrandModel = new VehicleBrandModel();
  get vehicleBrandModel() { return this._vehicleBrandModel; }
  set vehicleBrandModel(value) { this._vehicleBrandModel = value; }

  //Property VehicleColorModel
  private _vehicleColorModel = new VehicleColorModel();
  get vehicleColorModel() { return this._vehicleColorModel; }
  set vehicleColorModel(value) { this._vehicleColorModel = value; }

  //Property VehicleTypeSelected
  private _vehicleTypeSelected: string = "";
  get vehicleTypeSelected() { return this._vehicleTypeSelected; }
  set vehicleTypeSelected(value) { this._vehicleTypeSelected = value; }
  
  //Property VehicleTypeSelectedID 
  private _vehicleTypeSelectedID: number = 0;
  get vehicleTypeSelectedID() { return this._vehicleTypeSelectedID; }
  set vehicleTypeSelectedID(value) { this._vehicleTypeSelectedID = value; }

  //Property VehicleBrandSelected
  private _vehicleBrandSelected: string = "";
  get vehicleBrandSelected() { return this._vehicleBrandSelected; }
  set vehicleBrandSelected(value) { this._vehicleBrandSelected = value; }
    
  //Property VehicleBrandSelectedID 
  private _vehicleBrandSelectedID: number = 0;
  get vehicleBrandSelectedID() { return this._vehicleBrandSelectedID; }
  set vehicleBrandSelectedID(value) { this._vehicleBrandSelectedID = value; }

  //Property VehicleModelSelected
  private _vehicleModelSelected: string = "";
  get vehicleModelSelected() { return this._vehicleModelSelected; }
  set vehicleModelSelected(value) { this._vehicleModelSelected = value; }
    
  //Property VehicleModelSelectedID 
  private _vehicleModelSelectedID: number = 0;
  get vehicleModelSelectedID() { return this._vehicleModelSelectedID; }
  set vehicleModelSelectedID(value) { this._vehicleModelSelectedID = value; }

  //Property VehicleColorSelected
  private _vehicleColorSelected: string = "";
  get vehicleColorSelected() { return this._vehicleColorSelected; }
  set vehicleColorSelected(value) { this._vehicleColorSelected = value; }
    
  //Property VehicleColorSelectedID 
  private _vehicleColorSelectedID: number = 0;
  get vehicleColorSelectedID() { return this._vehicleColorSelectedID; }
  set vehicleColorSelectedID(value) { this._vehicleColorSelectedID = value; }

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
    private vehicleTypeListService: VehicleTypeListService,
    private vehicleBrandListService: VehicleBrandListService,
    private vehicleModelListService: VehicleModelListService,
    private vehicleColorListService: VehicleColorListService,
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  ngOnInit(): void {
    this.listVehicleType();
    this.listVehicleBrand();
    this.listVehicleModel();
    this.listVehicleColor();
  }

  changeVehicleType(event: any) {
    this.vehicleTypeSelectedID = event.vehicleTypeId;
    this.vehicleTypeSelected = event.vehicleTypeName;
  }

  changeVehicleBrand(event: any) {
    this.vehicleBrandSelectedID = event.vehicleBrandId;
    this.vehicleBrandSelected = event.vehicleBrandName;
  }

  changeVehicleModel(event: any) {
    this.vehicleModelSelectedID = event.vehicleModelId;
    this.vehicleModelSelected = event.vehicleModelName;
  }

  changeVehicleColor(event: any) {
    this.vehicleColorSelectedID = event.vehicleColorId;
    this.vehicleColorSelected = event.vehicleColorName;
  }

  populateVehicleModel(){
    this.vehicleModel.parked = 1;
    this.vehicleModel.vehicleTypeId = this.vehicleTypeSelectedID;
    this.vehicleModel.vehicleTypeName = this.vehicleTypeSelected;
    this.vehicleModel.vehicleBrandId = this.vehicleBrandSelectedID;
    this.vehicleModel.vehicleBrandName = this.vehicleBrandSelected;
    this.vehicleModel.vehicleModelId = this.vehicleModelSelectedID;
    this.vehicleModel.vehicleModelName = this.vehicleModelSelected;
    this.vehicleModel.vehicleColorId = this.vehicleColorSelectedID;
    this.vehicleModel.vehicleColorName = this.vehicleColorSelected;
    this.vehicleModel.entryDate = DateTime.now().toLocaleString(DateTime.DATE_SHORT);
    this.vehicleModel.entryTime = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
    this.vehicleModel.departureDate = "00/00/0000";
    this.vehicleModel.departureTime = "00:00";
  }

  save():void {
    console.log(this.vehicleModel);
    if(this.vehicleModel.vehicleTypeId == 0 && this.vehicleModel.vehicleTypeName == ""){
      this.messageErro = 'O campo tipo do veículo não foi preenchido!';
    }
    if(this.vehicleModel.vehicleBrandId == 0 && this.vehicleModel.vehicleBrandName == ""){
      this.messageErro = this.messageErro + ' O campo marca do veículo não foi preenchido!';
    }
    if(this.vehicleModel.vehicleModelId == 0 && this.vehicleModel.vehicleModelName == ""){
      this.messageErro = this.messageErro + ' O campo tipo do veículo não foi preenchido!';
    }
    if(this.vehicleModel.vehicleColorId == 0 && this.vehicleModel.vehicleColorName == ""){
      this.messageErro = this.messageErro + ' O campo cor do veículo não foi preenchido!';
    }
    if(this.vehicleModel.plate == ""){
      this.messageErro = this.messageErro + ' O campo placa do veículo não foi preenchido!';
    }
    if(this.messageErro != ""){
      this._snackBar.open(this.messageErro ,'', {
        duration: this.messageTime,
      });
      this.messageErro = "";
    }
    else
    {
      this.populateVehicleModel();
      //save
      if(this.vehicleModel.vehicleTypeId != 0 && this.vehicleModel.vehicleTypeName != "" &&
          this.vehicleModel.vehicleBrandId != 0 && this.vehicleModel.vehicleBrandName != "" &&
          this.vehicleModel.vehicleModelId != 0 && this.vehicleModel.vehicleModelName != "" &&
          this.vehicleModel.vehicleColorId != 0 && this.vehicleModel.vehicleColorName != "" &&
          this.vehicleModel.plate != "" && this.vehicleModel.entryDate != "" && 
          this.vehicleModel.entryTime != "" && this.vehicleModel.parked == 1)
          {
            this.vehicleCreateService
                .save(this.vehicleModel)
                .subscribe(brand => {
              this.successMessage();
              this.vehicleModelList();
              }, err => {
                this.errorMessage();
              })
            }
      }
    }

  dataSourceVehicleType = ELEMENT_DATA_VEHICLE_TYPE;

  listVehicleType() {
    this.vehicleTypeListService.list().subscribe(vehicleType => {
        ELEMENT_DATA_VEHICLE_TYPE = vehicleType;
        this.dataSourceVehicleType = ELEMENT_DATA_VEHICLE_TYPE;
      }, err => {
        console.log('Erro ao listar os tipos de veículos!', err);
      })
    }

  dataSourceVehicleBrand = ELEMENT_DATA_VEHICLE_BRAND;

  listVehicleBrand() {
    this.vehicleBrandListService.list().subscribe(vehicleBrand => {
      ELEMENT_DATA_VEHICLE_BRAND = vehicleBrand;
        this.dataSourceVehicleBrand = ELEMENT_DATA_VEHICLE_BRAND;
      }, err => {
        console.log('Erro ao listar as marcas dos veículos!', err);
      })
  }

  dataSourceVehicleModel = ELEMENT_DATA_VEHICLE_MODEL;

  listVehicleModel() {
    this.vehicleModelListService.list().subscribe(vehicleModel => {
      ELEMENT_DATA_VEHICLE_MODEL = vehicleModel;
        this.dataSourceVehicleModel = ELEMENT_DATA_VEHICLE_MODEL;
      }, err => {
        console.log('Erro ao listar os modelos dos veículos!', err);
      })
  }

  dataSourceVehicleColor = ELEMENT_DATA_VEHICLE_COLOR;

  listVehicleColor() {
    this.vehicleColorListService.list().subscribe(vehicleColor => {
      ELEMENT_DATA_VEHICLE_COLOR = vehicleColor;
        this.dataSourceVehicleColor = ELEMENT_DATA_VEHICLE_COLOR;
      }, err => {
        console.log('Erro ao listar as cores dos veículos!', err);
      })
  }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  vehicleModelList(){
    this.routerString = 'vehicle-list';
    this.router.navigate([this.routerString]);
  }

  successMessage():void{
    this.messageSuccess = 'O veículo foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + ' ' +this.vehicleModel.plate ,'', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar o veículo!';
    this._snackBar.open(this.messageErro + ' ' + this.vehicleModel.plate,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}