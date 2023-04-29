import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProfileUpdateService } from './profile-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileModel } from 'src/interface/profile.interface';

let ELEMENT_DATA: ProfileModel[];

@Component({
  selector: 'profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})

export class ProfileUpdateComponent implements OnInit {

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  profileModel = new ProfileModel();
   
  constructor(private profileUpdateService: ProfileUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();    
  }

  list() {
    this.profileUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.profileUpdateService.getById(id)
                              .subscribe(profile => { 
                                this.profileModel.profileId = profile.profileId;
                                this.profileModel.profileName = profile.profileName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<ProfileModel>();

  reply(){
    this.router.navigate(['main']);
  }

  public update() {
    this.profileModel.profileName = (<HTMLSelectElement>document.getElementById('profileName')).value;
    this.profileUpdateService.update(this.profileModel)
                              .subscribe(profile => { 
                                this._snackBar.open('Categoria atualizada com sucesso!', 'Voltar');
                                this.reply();

                              });
  }
}