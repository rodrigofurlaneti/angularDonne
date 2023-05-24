import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PaymentListService } from './payment-list.service';
import { PaymentModel } from 'src/interface/payment.interface';

@Component({
  selector: 'payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})

export class PaymentListComponent implements OnInit {

  constructor(private paymentListService: PaymentListService,
              private router: Router) { }
  
  ngOnInit(): void {
  }
}


