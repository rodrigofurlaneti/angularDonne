import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { BuyerListService } from './buyer-list.service';
import { BuyerModel } from 'src/interface/buyer.interface';

@Component({
  selector: 'buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: BuyerModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<BuyerModel>();
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

  constructor(private buyerListService: BuyerListService,
              private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.messageErro = 'Erro ao listar os clientes!';
    this.buyerListService.list().subscribe(list => {
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


