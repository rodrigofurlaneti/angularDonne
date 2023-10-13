import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PaymentListService } from './payment-list.service';
import { PaymentModel } from 'src/interface/payment.interface';

let ELEMENT_DATA: PaymentModel[];

@Component({
  selector: 'payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})

export class PaymentListComponent implements OnInit {

  displayedColumns: string[] = ['id','command','formOfPayment','paymentAmount','paymentType'];

  constructor(private paymentListService: PaymentListService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.paymentListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar os pagamentos', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PaymentModel>();

  reply(){
    this.router.navigate(['main']);
  }
}


