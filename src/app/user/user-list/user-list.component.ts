import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserListService } from './user-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'src/interface/user.interface';

let ELEMENT_DATA: UserModel[];

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(private userListService: UserListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.userListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<UserModel>();

  reply(){
    this.router.navigate(['main']);
  }
}