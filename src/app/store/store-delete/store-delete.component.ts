import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { StoreDeleteService } from './store-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreModel } from 'src/interface/store.interface';

let ELEMENT_DATA: StoreModel[];

@Component({
  selector: 'store-delete',
  templateUrl: './store-delete.component.html',
  styleUrls: ['./store-delete.component.css']
})
export class StoreDeleteComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  constructor(private storeDeleteService: StoreDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.storeDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as lojas!', err);
    })
  }

  public delete(id: number) {
    console.log(id);
    this.storeDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('Excluido a loja com sucesso!', 'Voltar', {
      duration: 1300
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<StoreModel>();

  reply(){
    this.router.navigate(['main']);
  }
}