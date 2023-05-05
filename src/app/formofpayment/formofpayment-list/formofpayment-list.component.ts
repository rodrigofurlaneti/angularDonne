import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormOfPaymentListService } from './formofpayment-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

let ELEMENT_DATA: FormOfPaymentModel[];

@Component({
  selector: 'formofpayment-list',
  templateUrl: './formofpayment-list.component.html',
  styleUrls: ['./formofpayment-list.component.css']
})
export class FormOfPaymentListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(private formOfPaymentListService: FormOfPaymentListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.formOfPaymentListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      this._snackBar.open('Erro ao listar as formas de pagamentos!','');
      console.log('Erro ao listar as formas de pagamentos!', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<FormOfPaymentModel>();

  reply(){
    this.router.navigate(['main']);
  }
}


