import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VehicleTypeListService } from './vehicleType-list.service';
import { VehicleTypeModel } from 'src/interface/vehicleType.interface';

@Component({
  selector: 'vehicleType-list',
  templateUrl: './vehicleType-list.component.html',
  styleUrls: ['./vehicleType-list.component.css']
})
export class VehicleTypeListComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['vehicleTypeId','vehicleTypeName'];
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

  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }
  
  // #endregion

  // #region [Constructor]

  constructor(private vehicleTypeListService: VehicleTypeListService,
              private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.messageErro = 'Erro ao listar os tipos de veículos!';
    this.vehicleTypeListService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log(this.messageErro, err);
    })
  }

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }
  // #endregion
}


