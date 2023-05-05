import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserDeleteService } from './user-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'src/interface/user.interface';

let ELEMENT_DATA: UserModel[];

@Component({
  selector: 'user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})

export class UserDeleteComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  constructor(private userDeleteService: UserDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.userDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os usuários!', err);
    })
  }

  public delete(id: number) {
    console.log(id);
    this.userDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('Excluido o usuário com sucesso!','', {
      duration: 2000
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<UserModel>();

  reply(){
    this.router.navigate(['main']);
  }
}