import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormOfPaymentUpdateService } from './formofpayment-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';
import { UserNameService } from 'src/app/user-name.service';
import { UserIdService } from 'src/app/user-id.service';

let ELEMENT_DATA: FormOfPaymentModel[];
let ELEMENT_DATA_Category: CategoryModel[];

@Component({
  selector: 'formofpayment-update',
  templateUrl: './formofpayment-update.component.html',
  styleUrls: ['./formofpayment-update.component.css']
})

export class FormOfPaymentUpdateComponent implements OnInit {

  formOfPaymentModel = new FormOfPaymentModel();
  isIdZero = true;
  isIdGreaterThanZero = false;
  displayedColumns: string[] = ['name'];
  ids: number = 0;

  constructor(private formOfPaymentUpdateService: FormOfPaymentUpdateService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,
    private userNameService: UserNameService,
    private userIdService: UserIdService) { }

  ngOnInit(): void {
    this.list();
    this.hideUpdateButton();
  }

  hideUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'none';
  }

  showUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'block';
  }

  list() {
    this.formOfPaymentUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as formas de pagamento!', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.formOfPaymentUpdateService.getById(id)
      .subscribe(formOfPayment => {
        this.isIdZero = false;
        this.isIdGreaterThanZero = true;
        this.formOfPaymentModel.dateUpdate = formOfPayment.dateUpdate;
        this.formOfPaymentModel.dateInsert = formOfPayment.dateInsert;
        this.formOfPaymentModel.userName = this.userNameService.userName;
        this.formOfPaymentModel.userId = parseInt(this.userIdService.userID);
        this.formOfPaymentModel.storeName = this.storeNameService.storeName;
        this.formOfPaymentModel.storeId = parseInt(this.storeIdService.storeId);
        this.formOfPaymentModel.formOfPaymentId = formOfPayment.formOfPaymentId;
        this.formOfPaymentModel.formOfPaymentName = formOfPayment.formOfPaymentName;
      });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<FormOfPaymentModel>();

  dataSourceCategory = ELEMENT_DATA_Category;

  reply() {
    this.router.navigate(['main']);
  }

  public update() {
    //check fields
    if (this.formOfPaymentModel.formOfPaymentName == "") {
      this._snackBar.open('Não está preenchido o campo nome da forma de pagamento!','', {
        duration: 2000
      });
    }

    //update
    if (this.formOfPaymentModel.formOfPaymentName != "") {
      this.formOfPaymentUpdateService.update(this.formOfPaymentModel).subscribe(formOfPayment => {
        this._snackBar.open('O cliente "' + this.formOfPaymentModel.formOfPaymentName + '", foi atualizado com sucesso!','', {
          duration: 2000
        });
        this.reply();
      }, err => {
        let message = 'Erro ao atualizar o cliente ' + this.formOfPaymentModel.formOfPaymentId + ', necessário refazer o procedimento!';
        this._snackBar.open(message,'', {
          duration: 2000
        });
        console.log(message, err);
      });

    }
  }
}