import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProfileListService } from './profile-list.service';
import { ProfileModel } from 'src/interface/profile.interface';

let ELEMENT_DATA: ProfileModel[];

@Component({
  selector: 'profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(private profileListService: ProfileListService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.profileListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<ProfileModel>();

  reply(){
    this.router.navigate(['main']);
  }
}