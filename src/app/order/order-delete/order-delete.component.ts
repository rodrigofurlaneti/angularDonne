import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { OrderDeleteService } from './order-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderModel } from 'src/interface/order.interface';

let ELEMENT_DATA: OrderModel[];

@Component({
  selector: 'order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})

export class OrderDeleteComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  constructor(private orderDeleteService: OrderDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.orderDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os usuários!', err);
    })
  }

  public delete(id: number) {
    console.log(id);
    this.orderDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('Excluido o usuário com sucesso!', 'Voltar', {
      duration: 1300
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<OrderModel>();

  reply(){
    this.router.navigate(['main']);
  }
}