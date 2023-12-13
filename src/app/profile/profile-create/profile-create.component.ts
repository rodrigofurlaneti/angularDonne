import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileCreateService } from './profile-create.service';
import { ProfileModel } from '../../../interface/profile.interface';

@Component({
  selector: 'profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})

export class ProfileCreateComponent {

  //#region [Properties]
  //Property ProfileModel
  private _profileModel = new ProfileModel();
  get profileModel() { return this._profileModel; }
  set profileModel(value) { this._profileModel = value; }

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

  //Property MessageBuyerName
  private _messageProfileName: string = '';
  get messageProfileName() { return this._messageProfileName; }
  set messageProfileName(value) { this._messageProfileName = value; }

  // #endregion

  // #region [Constructor]

  constructor(private profileCreateService: ProfileCreateService, 
    private _snackBar: MatSnackBar,  
    private readonly router: Router) { }
  // #endregion

  // #region [Methods]

  checkFields(profileModel : ProfileModel) : ProfileModel
  {
    if(profileModel.profileName == "")
    {
      this.messageProfileName = 'Não está preenchido o campo nome do perfil!';
      this._snackBar.open(this.messageProfileName,'', {
      duration: this.messageTime
      });
    }
    return profileModel
  }

  save() {

    this.profileModel = this.checkFields(this.profileModel);
    
    //save
    if(this.profileModel.profileName != '')
    {
      this.authenticatedUser();
      this.profileCreateService.save(this.profileModel).subscribe(profile => {
        this.successMessage();
        this.profileList();
      }, err => {
        this.errorMessage();
        console.log('Erro ao adicionar o perfil!', err);
      })
    }
  }

  reply() : void {
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  profileList() : void {
    this.routerString = 'profile-list';
    this.router.navigate([this.routerString]);
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
    this.messageSuccess = 'O perfil foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess,'', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao cadastrar o perfil!';
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}




