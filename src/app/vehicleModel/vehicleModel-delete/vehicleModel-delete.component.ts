import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VehicleModelDeleteService } from './vehicleModel-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleModel } from 'src/interface/vehicleModel.inteface';

@Component({
  selector: 'vehicleModel-delete',
  templateUrl: './vehicleModel-delete.component.html',
  styleUrls: ['./vehicleModel-delete.component.css']
})
export class VehicleModelDeleteComponent implements OnInit {

  //#region [Properties]
  //Property Status
  private _status: string = '';
  get status() { return this._status; }
  set status(value) { this._status = value; }

  //Property Ids
  private _ids: number = 0;
  get ids() { return this._ids; }
  set ids(value) { this._ids = value; }

  //Property DisplayedColumns
  private _displayedColumns: string[] = ['vehicleModelId','vehicleModelName'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: VehicleModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<VehicleModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }

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

  // #endregion

  //#region [Constructor]
  
  constructor(private vehicleModelDeleteService: VehicleModelDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
    // #endregion

  // #region [Methods]
  ngOnInit(): void {
    this.list();
  }

  list():void {
    this.messageErro = 'Erro ao listar os modelos dos veículos!';
    this.vehicleModelDeleteService.list().subscribe((list) => {
        this.dataSource = list;
    },
      (err) => {
        this._snackBar.open(this.messageErro,'', {
          duration: this.messageTime
        });
        console.log(this.messageErro, err);
      })
    }

  delete(id: number):void {
    this.messageSuccess = 'O modelo do veículo foi excluído com sucesso!'
    this.vehicleModelDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.reply();
    this._snackBar.open(this.messageSuccess,'', {
      duration: this.messageTime
    });
  }

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }
  
  // #endregion
}
