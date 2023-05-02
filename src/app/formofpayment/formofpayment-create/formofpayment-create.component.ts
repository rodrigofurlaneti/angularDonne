import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentCreateService } from './formofpayment-create.service';
import { FormOfPaymentModel } from '../../../interface/formofpayment.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { MatSelect } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';
import { UserNameService } from 'src/app/user-name.service';
import { UserIdService } from 'src/app/user-id.service';

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
    private _snackBar: MatSnackBar, private readonly router: Router, 
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,
    private userNameService: UserNameService,
    private userIdService: UserIdService) {
  }

  @ViewChild('matSelect')
  matSelect!: MatSelect;

  save() {
    if(this.formOfPaymentModel.formOfPaymentName == "")
    {
      this._snackBar.open('Não está preenchido o campo nome da forma de pagamento!', 'Voltar', {
        duration: 1300
      });
    }
    if (this.formOfPaymentModel.formOfPaymentName != '') {
      this.formOfPaymentModel.dateInsert = new Date().toISOString();
      this.formOfPaymentModel.dateUpdate = new Date().toISOString();
      this.formOfPaymentModel.storeId = parseInt(this.storeIdService.storeId);
      this.formOfPaymentModel.storeName = this.storeNameService.storeName;
      this.formOfPaymentModel.userId = parseInt(this.userIdService.userID);
      this.formOfPaymentModel.userName = this.userNameService.userName;
      console.log(this.formOfPaymentModel);
      this.formOfPaymentCreateService.save(this.formOfPaymentModel).subscribe(formofpayment => {
        this._snackBar.open('Nova forma de pagamento cadastrada com sucesso!', 'Voltar', {
          duration: 1300
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