import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CategoryListService } from './category-list.service';
import { CategoryModel } from 'src/interface/category.interface';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['categoryName'];
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

  constructor(private categoryListService: CategoryListService,
              private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit() : void {
    this.list();
  }

  list() {
    this.categoryListService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      this.messageErro = 'Erro ao listar as categorias';
      console.log(this.messageErro, err);
    })
  }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  // #endregion
}