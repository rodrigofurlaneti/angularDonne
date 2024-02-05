import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VehicleColorListService } from './vehicleColor-list.service';
import { VehicleColor } from 'src/interface/vehicleColor.interface';

@Component({
  selector: 'vehicleColor-list',
  templateUrl: './vehicleColor-list.component.html',
  styleUrls: ['./vehicleColor-list.component.css']
})
export class VehicleColorListComponent implements OnInit {

  //#region [Properties]
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

  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }
  
  // #endregion

  // #region [Constructor]

  constructor(private vehicleColorListService: VehicleColorListService,
              private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.messageErro = 'Erro ao listar os cor dos veículos!';
    this.vehicleColorListService.list().subscribe(list => {
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


