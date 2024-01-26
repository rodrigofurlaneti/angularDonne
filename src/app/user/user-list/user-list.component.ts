import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserListService } from './user-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'src/interface/user.interface';

let ELEMENT_DATA: UserModel[];

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: UserModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<UserModel>();
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
  constructor(private userListService: UserListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.userListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  reply(){
    this.router.navigate(['main']);
  }

  // #endregion
}