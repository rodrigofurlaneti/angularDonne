import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProfileDeleteService } from './profile-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileModel } from 'src/interface/profile.interface';

let ELEMENT_DATA: ProfileModel[];

@Component({
  selector: 'profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.css']
})
export class ProfileDeleteComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  constructor(private profileDeleteService: ProfileDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.profileDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  public delete(id: number) {
    this.profileDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('Excluido o perfil com sucesso!', 'Voltar', {
      duration: 1300
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<ProfileModel>();

  reply(){
    this.router.navigate(['main']);
  }
}