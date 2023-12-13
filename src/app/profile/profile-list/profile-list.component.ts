import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProfileListService } from './profile-list.service';
import { ProfileModel } from 'src/interface/profile.interface';

let ELEMENT_DATA: ProfileModel[];

@Component({
  selector: 'profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: ProfileModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<ProfileModel>();
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

  constructor(private profileListService: ProfileListService,
              private router: Router) { }
  
  // #endregion
  
  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.profileListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  reply() : void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  // #endregion
}