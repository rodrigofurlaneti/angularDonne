import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileCreateService } from './profile-create.service';
import { ProfileModel } from '../../../interface/profile.interface';
import { FormControl } from '@angular/forms';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';


@Component({
  selector: 'profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})

export class ProfileCreateComponent {

  constructor(private profileCreateService: ProfileCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router,
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,) { }

  save() {
    var nameProfile = (<HTMLSelectElement>document.getElementById('nameProfile')).value;
    if(nameProfile != '')
    {
      var profileModel = new ProfileModel();
      profileModel.profileName = nameProfile;
      profileModel.storeId = parseInt(this.storeIdService.storeId);
      profileModel.storeName = this.storeNameService.storeName;
      console.log(profileModel);
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




