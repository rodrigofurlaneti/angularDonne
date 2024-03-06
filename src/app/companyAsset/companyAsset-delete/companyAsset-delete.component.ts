import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CompanyAssetDeleteService } from './companyAsset-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyAssetModel } from '../../../interface/companyAsset.interface';

let ELEMENT_DATA: CompanyAssetModel[];

@Component({
  selector: 'companyAsset-delete',
  templateUrl: './companyAsset-delete.component.html',
  styleUrls: ['./companyAsset-delete.component.css']
})
export class CompanyAssetDeleteComponent implements OnInit {

  //#region [Properties]
  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }
  
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

  //Property Status
  private _status: string = '';
  get status() { return this._status; }
  set status(value) { this._status = value; }

  //Property Ids
  private _ids: number = 0;
  get ids() { return this._ids; }
  set ids(value) { this._ids = value; }

  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
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

  // #endregion

  //#region [Constructor]

  constructor(private companyAssetDeleteService: CompanyAssetDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  // #endregion

  //#region [Methods]

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.companyAssetDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os ativos da empresa!', err);
    })
  }

  public delete(id: number) {
    this.companyAssetDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('Excluido o ativo da empresa!','', {
      duration: 2000
    });
  }

  reply(){
    this.router.navigate(['main']);
  }
  // #endregion
}
