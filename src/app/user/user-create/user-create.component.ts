import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCreateService } from './user-create.service';
import { UserModel } from '../../../interface/user.interface';
import { FormControl } from '@angular/forms';
import { ProfileModel } from 'src/interface/profile.interface';
import { MatSelect } from '@angular/material/select';
import { ProfileListService } from 'src/app/profile/profile-list/profile-list.service';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent{

  //#region [Properties]
  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }
  
  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }
  
  //Property MessageUserName
  private _messageUserName: string = '';
  get messageUserName() { return this._messageUserName; }
  set messageUserName(value) { this._messageUserName = value; }

  //Property MessageUserPassword
  private _messageUserPassword: string = '';
  get messageUserPassword() { return this._messageUserPassword; }
  set messageUserPassword(value) { this._messageUserPassword = value; }

  //Property MessageSuccess
  private _messageSuccess: string = '';
  get messageSuccess() { return this._messageSuccess; }
  set messageSuccess(value) { this._messageSuccess = value; }
  
  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }
  
  //Property UserModel
  private _userModel = new UserModel();
  get userModel() { return this._userModel; }
  set userModel(value) { this._userModel = value; }

  //Property User
  private _user: UserModel = new UserModel();
  get user() { return this._user; }
  set user(value) { this._user = value; }
  
  //Property ShowPassword
  private _showPassword: boolean = false;
  get showPassword() { return this._showPassword; }
  set showPassword(value) { this._showPassword = value; }

  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DisableSelect
  private _disableSelect = new FormControl(false);
  get disableSelect() { return this._disableSelect; }
  set disableSelect(value) { this._disableSelect = value; }
  
  //Property SelectedProfile
  private _selectedProfile : ProfileModel = new ProfileModel();
  get selectedProfile() { return this._selectedProfile; }
  set selectedProfile(value) { this._selectedProfile = value; }

  //Property ClickedRows
  private _clickedRows = new Set<ProfileModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }

  //Property DataSource
  private _dataSource: ProfileModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }
  
  // #endregion

  //#region [Constructor]

  constructor(private userCreateService: UserCreateService, 
    private profileListService: ProfileListService,
    private _snackBar: MatSnackBar,  private readonly router: Router) {
      this.user = new UserModel()
    }
  
  //#endregion

  @ViewChild('matSelect')
  matSelect!: MatSelect;
 
  //#region [Methods]

  ngOnInit(): void {
    this.user = new UserModel();
    this.listProfile();
  }

//   ngAfterViewInit() {
//     this.matSelect.valueChange.subscribe(obj => {
//       this.selectedProfile.profileId = obj.profileId;
//       this.selectedProfile.profileName = obj.profileName;
//     });
// }

  listProfile() {
    this.profileListService.list().subscribe(list => {
        this.dataSource = list;
      }, err => {
        console.log('Erro ao listar os perfis', err);
      })
    }

  public checkFields(objUserModel: UserModel):UserModel
  {
    if(objUserModel.userName == "" && objUserModel.userPassword == "")
    {
      this._messageUserName = 'Não está preenchido o campo nome'; 
      this._messageUserPassword = ' e a senha do usuario!'; 
      this._snackBar.open(this.messageUserName + this.messageUserPassword,'', 
      {
        duration: this.messageTime
      });
    }
    else if(objUserModel.userName == "")
    {
      this._messageUserName = 'Não está preenchido o campo nome do usuário!'; 
      this._snackBar.open(this.messageUserName,'',
      {
        duration: this.messageTime
      });
    }
    else if(objUserModel.userPassword == "")
      {
        this._messageUserPassword = 'Não está preenchido o campo senha do usuario!'; 
        this._snackBar.open(this.messageUserPassword,'',
        {
          duration: this.messageTime
        });
      }
      return objUserModel;
    }

  save() {

    if(this.user.userName != '' && this.user.userPassword != '')
    {
      this.userCreateService.save(this.user)
        .subscribe(userResp => {
          this._snackBar.open('O usuário foi cadastrado com sucesso!','', {
            duration: 2000
          });
        this.router.navigate(['user-list']);
      }, err => {
          console.log('Erro ao adicionar o novo usuário!', err);
      })
    }

    this.checkFields(this.user)
  }
 
  reply() : void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  selectChangeHandler (event: any) {
    this.selectedProfile.profileName = event.target.outerText;
    console.log(this.selectedProfile.profileName)
  }

  //#endregion
}