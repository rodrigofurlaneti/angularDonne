import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VehicleBrandDeleteService } from './vehicleBrand-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleBrandModel } from 'src/interface/vehicleBrand.interface';

@Component({
  selector: 'vehicleBrand-delete',
  templateUrl: './vehicleBrand-delete.component.html',
  styleUrls: ['./vehicleBrand-delete.component.css']
})
export class VehicleBrandDeleteComponent implements OnInit {

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
  private _displayedColumns: string[] = ['vehicleBrandId','vehicleBrandName'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: VehicleBrandModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<VehicleBrandModel>();
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
  
  constructor(private vehicleBrandDeleteService: VehicleBrandDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
    // #endregion

  // #region [Methods]
  ngOnInit(): void {
    this.list();
  }

  list():void {
    this.messageErro = 'Erro ao listar as marcas dos veículos!';
    this.vehicleBrandDeleteService.list().subscribe((list) => {
        this.dataSource = list;
        console.log(this.dataSource);
    },
      (err) => {
        this._snackBar.open(this.messageErro,'', {
          duration: this.messageTime
        });
        console.log(this.messageErro, err);
      })
    }

  delete(id: number):void {
    this.messageSuccess = 'A marca do veículo foi excluido com sucesso!'
    this.vehicleBrandDeleteService.delete(id)
      .subscribe(() => this.status = 'Delete successful')
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
