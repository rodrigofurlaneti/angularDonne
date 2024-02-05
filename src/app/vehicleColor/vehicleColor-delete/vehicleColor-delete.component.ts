import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VehicleColorDeleteService } from './vehicleColor-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleColor } from 'src/interface/vehicleColor.interface';

@Component({
  selector: 'vehicleColor-delete',
  templateUrl: './vehicleColor-delete.component.html',
  styleUrls: ['./vehicleColor-delete.component.css']
})
export class VehicleColorDeleteComponent implements OnInit {

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
  private _displayedColumns: string[] = ['vehicleColorId','vehicleColorName'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: VehicleColor[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<VehicleColor>();
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
  
  constructor(private vehicleColorDeleteService: VehicleColorDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
    // #endregion

  // #region [Methods]
  ngOnInit(): void {
    this.list();
  }

  list():void {
    this.messageErro = 'Erro ao listar as cores dos veículos!';
    this.vehicleColorDeleteService.list().subscribe((list) => {
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
    this.messageSuccess = 'A cor do veículo foi excluído com sucesso!'
    this.vehicleColorDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
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
