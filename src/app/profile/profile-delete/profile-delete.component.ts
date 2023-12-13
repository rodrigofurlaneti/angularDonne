import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProfileDeleteService } from './profile-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileModel } from 'src/interface/profile.interface';

@Component({
  selector: 'profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.css']
})
export class ProfileDeleteComponent implements OnInit {

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
  private _dataSource: ProfileModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<ProfileModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }

  // #endregion

  // #region [Constructor]

  constructor(private profileDeleteService: ProfileDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.profileDeleteService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  public delete(id: number) {
    this.messageErro = 'Excluido o perfil com sucesso!';
    this.profileDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }
  // #endregion
}