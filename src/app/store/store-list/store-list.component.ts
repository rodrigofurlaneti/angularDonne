import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { StoreListService } from './store-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreModel } from 'src/interface/store.interface';

let ELEMENT_DATA: StoreModel[];

@Component({
  selector: 'store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(private storeListService: StoreListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.storeListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<StoreModel>();

  reply(){
    this.router.navigate(['main']);
  }
}