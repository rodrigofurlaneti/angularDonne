import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormofpaymentDeleteService } from './formofpayment-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormofpaymentModel } from '../../../interface/formofpayment.interface';

let ELEMENT_DATA: FormofpaymentModel[];

@Component({
  selector: 'formofpayment-delete',
  templateUrl: './formofpayment-delete.component.html',
  styleUrls: ['./formofpayment-delete.component.css']
})
export class FormofpaymentDeleteComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  constructor(private formofpaymentDeleteService: FormofpaymentDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.formofpaymentDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public delete(id: number) {
    this.formofpaymentDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('Excluido a categoria com sucesso!', 'Voltar');
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<FormofpaymentModel>();

  reply(){
    this.router.navigate(['main']);
  }
}
