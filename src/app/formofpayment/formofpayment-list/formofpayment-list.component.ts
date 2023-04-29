import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormofpaymentListService } from './formofpayment-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

let ELEMENT_DATA: FormOfPaymentModel[];

@Component({
  selector: 'formofpayment-list',
  templateUrl: './formofpayment-list.component.html',
  styleUrls: ['./formofpayment-list.component.css']
})
export class FormofpaymentListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(private formofpaymentListService: FormofpaymentListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.formofpaymentListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<FormOfPaymentModel>();

  reply(){
    this.router.navigate(['main']);
  }
}


