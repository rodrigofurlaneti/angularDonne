import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormofpaymentUpdateService } from './formofpayment-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormofpaymentModel } from 'src/interface/formofpayment.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';
import { UserNameService } from 'src/app/user-name.service';
import { UserIdService } from 'src/app/user-id.service';

let ELEMENT_DATA: FormofpaymentModel[];
let ELEMENT_DATA_Category: CategoryModel[];

@Component({
  selector: 'formofpayment-update',
  templateUrl: './formofpayment-update.component.html',
  styleUrls: ['./formofpayment-update.component.css']
})

export class FormofpaymentUpdateComponent implements OnInit {

  needToPrint: boolean = false;
  formofpaymentStatus: boolean = false;
  categoryNameSelect: string = " ";
  categoryIDSelect: number = 0;
  formofpaymentID: number = 0;

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  ids: number = 0;

  formofpaymentModel = new FormofpaymentModel();
   
  constructor(private formofpaymentUpdateService: FormofpaymentUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router,
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,
    private userNameService: UserNameService,
    private userIdService: UserIdService) { }
  
  ngOnInit(): void {
    this.list();  
    this.listCategory();  
  }

  listCategory() {
    this.formofpaymentUpdateService.listCategory().subscribe(list => {
      ELEMENT_DATA_Category = list;
      this.dataSourceCategory = ELEMENT_DATA_Category;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  items = [{ selected: false, label: 'Precisa imprimir?' }];
  status = [{ selected: false, label: 'Status do produto?' }];

  onChange(event: MatCheckboxChange) {
    this.needToPrint = event.checked;
    alert(event.checked);
  }

  onChangeStatus(event: MatCheckboxChange) {
    this.formofpaymentStatus = event.checked;
    alert(event.checked);
  }

  change(event: any) {
    this.categoryIDSelect = event.categoryId;
    this.categoryNameSelect = event.categoryName;
    console.log(this.categoryIDSelect);
    console.log(this.categoryNameSelect);
  }

  list() {
    this.formofpaymentUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.formofpaymentUpdateService.getById(id)
                              .subscribe(formofpayment => { 

                                this.formofpaymentID = id;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<FormofpaymentModel>();

  dataSourceCategory = ELEMENT_DATA_Category;

  reply(){
    this.router.navigate(['main']);
  }

  public update() {
    this.formofpaymentUpdateService.update(this.formofpaymentModel)
                              .subscribe(formofpayment => { 
                                this._snackBar.open('Categoria atualizada com sucesso!', 'Voltar');
                                this.reply();

                              });
  }
}