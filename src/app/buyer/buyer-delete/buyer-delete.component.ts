import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { BuyerDeleteService } from './buyer-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuyerModel } from 'src/interface/buyer.interface';

let ELEMENT_DATA: BuyerModel[];

@Component({
  selector: 'buyer-delete',
  templateUrl: './buyer-delete.component.html',
  styleUrls: ['./buyer-delete.component.css']
})
export class BuyerDeleteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];

  status: string = '';

  ids: number = 0;

  constructor(private buyerDeleteService: BuyerDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.buyerDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public delete(id: number) {
    this.buyerDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('O cliente foi excluido com sucesso!','', {
      duration: 2000
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<BuyerModel>();

  reply(){
    this.router.navigate(['main']);
  }
}
