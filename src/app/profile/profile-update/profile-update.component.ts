import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProfileUpdateService } from './profile-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileModel } from 'src/interface/profile.interface';

@Component({
  selector: 'profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})

export class ProfileUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

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

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

  //Property MessageProfileName
  private _messageProfileName: string = '';
  get messageProfileName() { return this._messageProfileName; }
  set messageProfileName(value) { this._messageProfileName = value; }
      
  //Property ProfileModel
  private _profileModel = new ProfileModel();
  get profileModel() { return this._profileModel; }
  set profileModel(value) { this._profileModel = value; }

  //Property IsIdZero
  private _isIdZero: boolean = true;
  get isIdZero() { return this._isIdZero; }
  set isIdZero(value) { this._isIdZero = value; }

  //Property IsIdGreaterThanZero
  private _isIdGreaterThanZero: boolean = false;
  get isIdGreaterThanZero() { return this._isIdGreaterThanZero; }
  set isIdGreaterThanZero(value) { this._isIdGreaterThanZero = value; }

  //Property Status
  private _status: string = '';
  get status() { return this._status; }
  set status(value) { this._status = value; }

  //Property Ids
  private _ids: number = 0;
  get ids() { return this._ids; }
  set ids(value) { this._ids = value; }

  //Property DataSource
  private _dataSource: ProfileModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  // #endregion
   
  // #region [Constructor]

  constructor(private profileUpdateService: ProfileUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  // #endregion

  // #region [Methods]

  ngOnInit(): void {
    this.list(); 
    this.hideUpdateButton();   
  }

  hideUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'none';
  }

  showUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'block';
  }

  list() {
    this.profileUpdateService.list().subscribe(list => {
      this.dataSource = list;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.profileUpdateService.getById(id)
                              .subscribe(profile => { 
                                this.profileModel.profileId = profile.profileId;
                                this.profileModel.profileName = profile.profileName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  clickedRows = new Set<ProfileModel>();

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public checkFields(profileModel: ProfileModel) : ProfileModel
  {
    if(profileModel.profileName == "")
    {
      this.messageProfileName = 'O nome do perfil está vazio, necessário preencher!';
      this._snackBar.open(this.messageProfileName,'', {
        duration: this.messageTime
      });
    }
    return profileModel;
  }

  public update() {

    this.profileModel = this.checkFields(this.profileModel);
    
    //save
    if(this.profileModel.profileName != ""){
      this.authenticatedUser();
      this.profileUpdateService.update(this.profileModel)
                                .subscribe(profile => { 
                                this.successMessage();
                                this.reply();
                           }, err => {
                            this.errorMessage();
                            console.log('Erro ao listar as categorias', err);
                          });
    }
  }

  public authenticatedUser(){
        // 👉️ User Login
        const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
        if (userIdLogin != null) {
          this.profileModel.userId = parseInt(userIdLogin.value);
        }
        const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
        if (userIdLogin != null) {
          this.profileModel.userName = userNameLogin.value;
        }
  }

  public successMessage(){
    this.messageSuccess = 'O perfil foi atualizado com sucesso!';
    this._snackBar.open(this.messageSuccess,'', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao atualizar o perfil!';
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}