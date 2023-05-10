import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentCreateService } from './formofpayment-create.service';
import { FormOfPaymentModel } from '../../../interface/formofpayment.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { MatSelect } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

let ELEMENT_DATA_Category: CategoryModel[];


@Component({
  selector: 'formofpayment-create',
  templateUrl: './formofpayment-create.component.html',
  styleUrls: ['./formofpayment-create.component.css']
})

export class FormOfPaymentCreateComponent {

  needToPrint: boolean = false;
  formofpaymentStatus: boolean = false;
  categoryNameSelect: string = " ";
  categoryIDSelect: number = 0;

  formOfPaymentModel = new FormOfPaymentModel();

  displayedColumns: string[] = ['name'];

  disableSelect = new FormControl(false);

  selectedCategory: CategoryModel = new CategoryModel();

  constructor(private formOfPaymentCreateService: FormOfPaymentCreateService,
    private _snackBar: MatSnackBar, private readonly router: Router) {
  }

  @ViewChild('matSelect')
  matSelect!: MatSelect;

  save() {
    if(this.formOfPaymentModel.formOfPaymentName == "")
    {
      this._snackBar.open('Não está preenchido o campo nome da forma de pagamento!','', {
        duration: 2000
      });
    }
    if (this.formOfPaymentModel.formOfPaymentName != '') {
      this.formOfPaymentModel.dateInsert = new Date().toISOString();
      this.formOfPaymentModel.dateUpdate = new Date().toISOString();
      console.log(this.formOfPaymentModel);
      this.formOfPaymentCreateService.save(this.formOfPaymentModel).subscribe(formofpayment => {
        this._snackBar.open('Nova forma de pagamento ' + formofpayment.formOfPaymentName + ' cadastrada com sucesso!','', {
          duration: 2000
        });
        this.router.navigate(['formofpayment-list']);
      }, err => {
        console.log('Erro ao adicionar a nova forma de pagamento!', err);
      })
    }
  }

  dataSourceCategory = ELEMENT_DATA_Category;

  reply() {
    this.router.navigate(['main']);
  }
}