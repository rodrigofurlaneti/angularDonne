import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserUpdateService } from './user-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'src/interface/user.interface';
import { ProfileModel } from 'src/interface/profile.interface';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';

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
    private router: Router,
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,) { }

  ngOnInit(): void {
    this.list();
    this.listProfile();
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
      this.dataSourceProfile = ELEMENT_DATA_PROFILE;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.userUpdateService.getById(id)
      .subscribe(user => {
        this.userModel.userId = user.userId;
        this.userModel.userName = user.userName;
        this.userModel.userPassword = user.userPassword;
        this.userModel.profile = user.profileName;
        this.userModel.storeId = user.storeId;
        this.userModel.storeName = user.storeName;
        this.userModel.profileId = user.profileId;
        this.userModel.profileName = user.profileName;
        this.selected = user.profileName;
        this.isIdZero = false;
        this.isIdGreaterThanZero = true;
      });
  }

  dataSource = ELEMENT_DATA;

  dataSourceProfile = ELEMENT_DATA_PROFILE;

  clickedRows = new Set<UserModel>();

  reply() {
    this.router.navigate(['main']);
  }

  consoleLog(id: number) {
    console.log(id);
  }

  public update() {
    this.userModel.storeId = parseInt(this.storeIdService.storeId);
    this.userModel.storeName = this.storeNameService.storeName;
    this.userModel.userName = (<HTMLSelectElement>document.getElementById('nameUser')).value;
    this.userModel.userPassword = (<HTMLSelectElement>document.getElementById('userPassword')).value;
    this.userUpdateService.update(this.userModel)
      .subscribe(user => {
        this._snackBar.open('Usuário ' + this.userModel.userName + ' atualizado com sucesso!', '', {
          duration: 2000
        });
        this.reply();
      });
  }
}