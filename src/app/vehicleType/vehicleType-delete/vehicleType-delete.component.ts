import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleTypeModel } from 'src/interface/vehicleType.interface';
import { VehicleTypeDeleteService } from './vehicleType-delete.service';

@Component({
  selector: 'vehicleType-delete',
  templateUrl: './vehicleType-delete.component.html',
  styleUrls: ['./vehicleType-delete.component.css']
})
export class VehicleTypeDeleteComponent implements OnInit {

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
  private _displayedColumns: string[] = ['vehicleTypeName'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: VehicleTypeModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<VehicleTypeModel>();
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
  
  constructor(private vehicleTypeDeleteService: VehicleTypeDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
    // #endregion

  // #region [Methods]
  ngOnInit(): void {
    this.list();
  }

  list():void {
    this.messageErro = 'Erro ao listar os tipos de veículos!';
    this.vehicleTypeDeleteService.list().subscribe((list) => {
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
    this.messageSuccess = 'O tipo de veículo foi excluido com sucesso!'
    this.vehicleTypeDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
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
