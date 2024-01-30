import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VehicleTypeUpdateService } from './vehicleType-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleTypeModel } from 'src/interface/vehicleType.interface';

let ELEMENT_DATA: VehicleTypeModel[];

@Component({
  selector: 'vehicleType-update',
  templateUrl: './vehicleType-update.component.html',
  styleUrls: ['./vehicleType-update.component.css']
})

export class VehicleTypeUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['vehicleTypeId', 'vehicleTypeName'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

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

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

  //Property VehicleTypeModel
  private _vehicleTypeModel = new VehicleTypeModel();
  get vehicleTypeModel() { return this._vehicleTypeModel; }
  set vehicleTypeModel(value) { this._vehicleTypeModel = value; }

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

  //Property MessageVehicleTypeName
  private _messageVehicleTypeName: string = '';
  get messageVehicleTypeName() { return this._messageVehicleTypeName; }
  set messageVehicleTypeName(value) { this._messageVehicleTypeName = value; }

  // #endregion

  //#region [Constructor]
  constructor(private vehicleTypeUpdateService: VehicleTypeUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  //#endregion
  
  //#region [Methods]

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
    updateBtn.style.display = 'none';
  }

  list() {
    this.vehicleTypeUpdateService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log('Erro ao listar os clientes!', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.vehicleTypeUpdateService.getById(id)
                              .subscribe(vehicleType => { 
                                this.vehicleTypeModel.vehicleTypeId = vehicleType.vehicleTypeId;
                                this.vehicleTypeModel.vehicleTypeName = vehicleType.vehicleTypeName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<VehicleTypeModel>();

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public update() {

    this.vehicleTypeModel = this.checkFields(this.vehicleTypeModel);

    //update
    if(this.vehicleTypeModel.vehicleTypeName != "")
    {
      this.vehicleTypeUpdateService
          .update(this.vehicleTypeModel)
          .subscribe(vehicleType => { 
        this.successMessage();
        this.reply();
      }, err => {
        this.errorMessage();
      });
    }
  }

  public checkFields(objVehicleTypeModel : VehicleTypeModel) : VehicleTypeModel
  {
    if(objVehicleTypeModel.vehicleTypeName == "")
    {
      this.messageVehicleTypeName = 'Não está preenchido o campo nome do tipo de veículo!';
      this._snackBar.open(this.messageVehicleTypeName,'', {
        duration: this.messageTime
      });
    }
    return objVehicleTypeModel;
  }

  public successMessage(){
    this.messageSuccess = 'O tipo de veículo foi atualizado com sucesso!';
    this._snackBar.open(this.messageSuccess,'', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao atualizar o tipo de veículo!'
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}