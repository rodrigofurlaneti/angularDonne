import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CompanyAssetListService } from './companyAsset-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyAssetModel } from 'src/interface/companyAsset.interface';

@Component({
  selector: 'companyAsset-list',
  templateUrl: './companyAsset-list.component.html',
  styleUrls: ['./companyAsset-list.component.css']
})
export class CompanyAssetListComponent implements OnInit {

  //#region [Properties]
  
    //Property DisplayedColumns
    private _displayedColumns: string[] = ['name', 'costPrice'];
    get displayedColumns() { return this._displayedColumns; }
    set displayedColumns(value) { this._displayedColumns = value; }

    //Property DataSource
    private _dataSource: CompanyAssetModel[] = [];
    get dataSource() { return this._dataSource; }
    set dataSource(value) { this._dataSource = value; }

    //Property ClickedRows
    private _clickedRows = new Set<CompanyAssetModel>();
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

  constructor(private companyAssetListService: CompanyAssetListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  
// #endregion

// #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.companyAssetListService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      this._snackBar.open('Erro ao listar os ativos da empresa!','');
      console.log('Erro ao listar os ativos da empresa!', err);
    })
  }

  reply(){
    this.router.navigate(['main']);
  }

  // #endregion
}


