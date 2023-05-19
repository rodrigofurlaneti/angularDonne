import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { OrderListService } from './order-list.service';
import { OrderModel } from 'src/interface/order.interface';

let ELEMENT_DATA: OrderModel[];

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['id','command','buyer','product','amount'];

  constructor(private orderListService: OrderListService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.orderListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar os pedidos', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<OrderModel>();

  reply(){
    this.router.navigate(['main']);
  }
}