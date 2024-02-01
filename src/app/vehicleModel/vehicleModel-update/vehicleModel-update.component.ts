import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VehicleModelUpdateService } from './vehicleModel-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleModel } from 'src/interface/vehicleModel.inteface';

let ELEMENT_DATA: VehicleModel[];

@Component({
  selector: 'vehicleModel-update',
  templateUrl: './vehicleModel-update.component.html',
  styleUrls: ['./vehicleModel-update.component.css']
})

export class VehicleModelUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['vehicleModelId','vehicleModelName'];
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

  //Property MessageModelName
  private _messageModelName: string = '';
  get messageModelName() { return this._messageModelName; }
  set messageModelName(value) { this._messageModelName = value; }
  
  //Property ModelModel
  private _vehicleModel = new VehicleModel();
  get vehicleModel() { return this._vehicleModel; }
  set vehicleModel(value) { this._vehicleModel = value; }

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

  // #endregion

  //#region [Constructor]
  constructor(private vehicleModelUpdateService: VehicleModelUpdateService,
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
    this.vehicleModelUpdateService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log('Erro ao listar os modelos dos veículos!', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.vehicleModelUpdateService.getById(id)
                              .subscribe(modelResponse => { 
                                this.vehicleModel.vehicleModelId = modelResponse.ModelId;
                                this.vehicleModel.vehicleModelName = modelResponse.ModelName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<VehicleModel>();

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public update() {

    this.vehicleModel = this.checkFields(this.vehicleModel);

    //update
    if(this.vehicleModel.vehicleModelName != "")
    {
      this.vehicleModelUpdateService.update(this.vehicleModel)
      .subscribe(modelResponse => { 
        this.successMessage();
        this.reply();
      }, err => {
        this.errorMessage();
      });
    }
  }

  public checkFields(objModelModel : VehicleModel) : VehicleModel
  {
    if(objModelModel.vehicleModelName == "")
    {
      this.messageModelName = 'Não está preenchido o campo nome do modelo do veículo!';
      this._snackBar.open(this.messageModelName,'', {
        duration: this.messageTime
      });
    }
    
    return objModelModel;
  }

  public successMessage(){
    this.messageSuccess = 'O modelo do veículo foi atualizado com sucesso!';
    this._snackBar.open(this.messageSuccess,'', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao atualizar o modelo do veículo!'
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}