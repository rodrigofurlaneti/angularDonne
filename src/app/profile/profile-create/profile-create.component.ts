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

  profileModel = new ProfileModel();

  messageTime: number = 5000;

  constructor(private profileCreateService: ProfileCreateService, 
    private _snackBar: MatSnackBar,  
    private readonly router: Router) { }

  save() {

    //checkFields
    if(this.profileModel.profileName == "")
    {
      this._snackBar.open('O nome do perfil está vazio, precisa preencher!','', {
      duration: this.messageTime
      });
    }
    
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

  reply(){
    this.router.navigate(['main']);
  }

  profileList(){
    this.router.navigate(['profile-list']);
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
    this._snackBar.open('O perfil "'+ this.profileModel.profileName +'" foi cadastrado com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar o perfil "'+ this.profileModel.profileName +'" !','', {
      duration: this.messageTime
    });
  }
}




