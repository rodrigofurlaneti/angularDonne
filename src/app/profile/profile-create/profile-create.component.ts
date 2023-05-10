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

  constructor(private profileCreateService: ProfileCreateService, 
    private _snackBar: MatSnackBar,  
    private readonly router: Router) { }

  save() {
    var nameProfile = (<HTMLSelectElement>document.getElementById('nameProfile')).value;
    if(nameProfile != '')
    {
      var profileModel = new ProfileModel();
      profileModel.profileName = nameProfile;
      this.profileCreateService.save(profileModel).subscribe(profile => {
        this._snackBar.open('Perfil cadastrada com sucesso!','');
        this.router.navigate(['profile-list']);
      }, err => {
          console.log('Erro ao adicionar o perfil!', err);
      })
    }
    if(nameProfile == '')
    {
      this._snackBar.open('Não está preenchido o campo nome do perfil!','');
    }
  }

  reply(){
    this.router.navigate(['main']);
  }
}




