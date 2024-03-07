import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VehicleListService } from './vehicle-list.service';
import { VehicleModel } from 'src/interface/vehicle.interface';

@Component({
  selector: 'vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  public useDefault = false;

  private _displayedColumns: string[] = ['vehicleId','vehicleTypeName','vehicleBrandName',
'vehicleModelName', 'vehicleColorName', 'plate', 'entryDate', 'entryTime', 'departureDate', 
'departureTime', 'parked'];
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

  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }
  
  // #endregion

  // #region [Constructor]

  constructor(private vehicleListService: VehicleListService,
              private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  public toggle(event: any, value: number) {
    if(value == 1){
      this.useDefault = true;
    }
}

  list() {
    this.messageErro = 'Erro ao listar os veiculos!';
    this.vehicleListService.list().subscribe(list => {
      this.dataSource = list;
      console.log(list);
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


