import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CategoryDeleteService } from './category-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryModel } from 'src/interface/category.interface';

@Component({
  selector: 'category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})

export class CategoryDeleteComponent implements OnInit {

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
  private _dataSource: CategoryModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<CategoryModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }

  // #endregion

  // #region [Constructor]

  constructor(private categoryDeleteService: CategoryDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.categoryDeleteService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public delete(id: number) {
    this.messageSuccess = 'A categoria foi excluída com sucesso!';
    this.categoryDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.reply();
    this._snackBar.open(this.messageSuccess, '', {
      duration: this._messageTime
    });
  }

  // #endregion
}
