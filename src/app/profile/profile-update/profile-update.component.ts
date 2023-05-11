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

    messageTime: number = 5000;
   
  constructor(private profileUpdateService: ProfileUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
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
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
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

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<ProfileModel>();

  reply(){
    this.router.navigate(['main']);
  }

  public update() {

    //checkFields
    if(this.profileModel.profileName == "")
    {
      this._snackBar.open('O nome do perfil está vazio, necessário preencher!','', {
        duration: this.messageTime
      });
    }
    
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
    this._snackBar.open('O perfil "'+ this.profileModel.profileName +'" foi atualizado com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao atualizar o perfil "'+ this.profileModel.profileName +'" !','', {
      duration: this.messageTime
    });
  }
}