import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormOfPaymentDeleteService } from './formofpayment-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentModel } from '../../../interface/formofpayment.interface';

let ELEMENT_DATA: FormOfPaymentModel[];

@Component({
  selector: 'formofpayment-delete',
  templateUrl: './formofpayment-delete.component.html',
  styleUrls: ['./formofpayment-delete.component.css']
})
export class FormOfPaymentDeleteComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  constructor(private formOfPaymentDeleteService: FormOfPaymentDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.formOfPaymentDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as formas de pagamento', err);
    })
  }

  public delete(id: number) {
    this.formOfPaymentDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('Excluido a forma de pagamento com sucesso!','', {
      duration: 2000
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<FormOfPaymentModel>();

  reply(){
    this.router.navigate(['main']);
  }
}
