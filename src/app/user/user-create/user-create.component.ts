import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCreateService } from './user-create.service';
import { UserModel } from '../../../interface/user.interface';
import { FormControl, NgForm } from '@angular/forms';
import { ProfileModel } from 'src/interface/profile.interface';
import { MatSelect } from '@angular/material/select';
import { StoreModel } from 'src/interface/store.interface';
import { UserIdService } from 'src/app/user-id.service';
import { UserNameService } from 'src/app/user-name.service';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';

let ELEMENT_DATA: ProfileModel[];
let ELEMENT_DATA_STORE: StoreModel[];

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit, AfterViewInit{

  user: UserModel;
  
  showPassword: boolean = false;

  displayedColumns: string[] = ['name'];

  disableSelect = new FormControl(false);
  
  selectedProfile : ProfileModel = new ProfileModel();

  constructor(private userCreateService: UserCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router, 
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,
    private userNameService: UserNameService,
    private userIdService: UserIdService) {
      this.user = new UserModel()
    }

  @ViewChild('matSelect')
  matSelect!: MatSelect;
 
  onChangeofOptions(newGov: string) {
    console.log(newGov);
  }
	
  ngOnInit(): void {
    this.user = new UserModel();
    this.listProfile();
    this.listStore();
  }

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(obj => {
      this.selectedProfile.profileId = obj.profileId;
      this.selectedProfile.profileName = obj.profileName;
    });
}

  listProfile() {
    this.userCreateService.listProfile().subscribe(list => {
        ELEMENT_DATA = list;
        this.dataSource = ELEMENT_DATA;
      }, err => {
        console.log('Erro ao listar os perfis', err);
      })
    }

    listStore() {
      this.userCreateService.listStore().subscribe(list => {
          ELEMENT_DATA_STORE = list;
          this.dataSourceStore = ELEMENT_DATA_STORE;
        }, err => {
          console.log('Erro ao listar os perfis', err);
        })
      }

  save() {
    console.log(this.user);
    this.user.storeName = this.storeNameService.storeName;
    this.user.storeId = parseInt(this.storeIdService.storeId);
    this.user.profileName = this.user.profile.profileName;
    this.user.profileId = this.user.profile.profileId;
    this.user.storeId = parseInt(this.storeIdService.storeId);
    this.user.storeName = this.storeNameService.storeName;
    if(this.user.userName != '' && this.user.userPassword != '')
    {
      this.userCreateService.save(this.user).subscribe(userResp => {
        this._snackBar.open('Perfil cadastrada com sucesso!','', {
          duration: 2000
        });
        this.router.navigate(['user-list']);
      }, err => {
          console.log('Erro ao adicionar o novo usuário!', err);
      })
    }
    if(this.user.userName == '')
    {
      this._snackBar.open('Não está preenchido o campo nome do usuario!','', {
        duration: 2000
      });
    }
    if(this.user.userPassword == '')
    {
      this._snackBar.open('Não está preenchido o campo senha do usuario!','', {
        duration: 2000
      });
    }
  }

  dataSource = ELEMENT_DATA;

  dataSourceStore = ELEMENT_DATA_STORE;

  clickedRows = new Set<ProfileModel>();
  
  reply(){
    this.router.navigate(['main']);
  }

  selectChangeHandler (event: any) {
    this.selectedProfile.profileName = event.target.outerText;
    console.log(this.selectedProfile.profileName)
  }
}