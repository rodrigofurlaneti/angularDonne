import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserUpdateService } from './user-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'src/interface/user.interface';
import { ProfileModel } from 'src/interface/profile.interface';

let ELEMENT_DATA: UserModel[];
let ELEMENT_DATA_PROFILE: ProfileModel[];

@Component({
  selector: 'user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})

export class UserUpdateComponent implements OnInit {
 
  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  public selected: string = '';

  userModel = new UserModel();

  constructor(private userUpdateService: UserUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
    this.listProfile();    
  }

  list() {
    this.userUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar os usuários', err);
    })
  }

  listProfile() {
    this.userUpdateService.listProfile().subscribe(list => {
      ELEMENT_DATA_PROFILE = list;

    }, err => {
      console.log('Erro ao listar os usuários', err);
    })
  }

  public getById(id: number) {
    this.userUpdateService.getById(id)
                              .subscribe(user => { 
                                this.userModel.userId = user.userId;
                                this.userModel.userName = user.userName;
                                this.userModel.userPassword = user.userPassword;
                                this.selected = user.profileName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  dataSourceProfile = ELEMENT_DATA_PROFILE;

  clickedRows = new Set<UserModel>();

  reply(){
    this.router.navigate(['main']);
  }

  consoleLog(id: number){
    console.log(id);
  }

  public update() {
    this.userModel.userName = (<HTMLSelectElement>document.getElementById('nameUser')).value;
    this.userModel.userPassword = (<HTMLSelectElement>document.getElementById('userPassword')).value;
    this.userUpdateService.update(this.userModel)
                              .subscribe(user => { 
                                this._snackBar.open('Usuário atualizado com sucesso!', 'Voltar');
                                this.reply();

                              });
  }
}