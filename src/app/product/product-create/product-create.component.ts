import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductCreateService } from './product-create.service';
import { ProductModel } from '../../../interface/product.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { MatSelect } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

let ELEMENT_DATA_Category: CategoryModel[];

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent {

  needToPrint: boolean = false;

  productStatus: boolean = false;

  categoryNameSelect: string = "";

  categoryIDSelect: number = 0;

  productModel = new ProductModel();

  displayedColumns: string[] = ['name'];

  disableSelect = new FormControl(false);

  selectedCategory: CategoryModel = new CategoryModel();

  messageTime: number = 5000;

  constructor(private productCreateService: ProductCreateService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {
  }

  @ViewChild('matSelect')
  matSelect!: MatSelect;

  ngOnInit(): void {
    this.listCategory();
  }

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(obj => {
      this.selectedCategory.categoryName = obj.CategoryName;
    });
  }

  listCategory() {
    this.productCreateService.listCategory().subscribe(list => {
      ELEMENT_DATA_Category = list;
      this.dataSourceCategory = ELEMENT_DATA_Category;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  items = [{ selected: false, label: '' }];
  status = [{ selected: false, label: 'Status do produto?' }];

  onChange(event: MatCheckboxChange) {
    this.needToPrint = event.checked;
  }

  onChangeStatus(event: MatCheckboxChange) {
    this.productStatus = event.checked;
  }

  change(event: any) {
    this.categoryIDSelect = event.categoryId;
    this.categoryNameSelect = event.categoryName;
  }

  calculate(){
    var totalValueCostOfInventory = parseFloat(this.productModel.costPrice) * this.productModel.quantityStock;
    this.productModel.totalValueCostOfInventory = totalValueCostOfInventory.toString();
    var totalValueSaleStock = parseFloat(this.productModel.salePrice) * this.productModel.quantityStock;
    this.productModel.totalValueSaleStock = totalValueSaleStock.toString();
  }
 
  save() {

    //CheckFields
    this.checkFields();

    //save
    if (this.productModel.productName != '' && this.productModel.costPrice != '' && this.productModel.salePrice != '' && this.productModel.quantityStock != 0) {
      this.authenticatedUser();
      this.productModel.categoryName = this.categoryNameSelect;
      this.productModel.categoryId = this.categoryIDSelect;
      this.productModel.costPrice = parseFloat(this.productModel.costPrice).toString(); //parseFloat(priceCost)
      this.productModel.salePrice = parseFloat(this.productModel.salePrice).toString(); //parseFloat(priceSale)
      this.productModel.needToPrint = this.needToPrint;
      this.productModel.status = this.productStatus;
      this.productCreateService.save(this.productModel).subscribe(product => {
        this.successMessage();
        this.productList();
      }, err => {
        this.errorMessage();
      })
    }
  }

  dataSourceCategory = ELEMENT_DATA_Category;

  reply() {
    this.router.navigate(['main']);
  }

  public productList(){
    this.router.navigate(['product-list']);
  }

  public checkFields(){
    if (this.productModel.productName == '') {
      this._snackBar.open('O nome do produto está vazio, precisa preencher!','', {
        duration: this.messageTime
      });
    }
    if (this.productModel.costPrice == '') {
      this._snackBar.open('O preço de custo do produto está vazio, precisa preencher!','', {
        duration: this.messageTime
      });
    }
    if (this.productModel.salePrice == '') {
      this._snackBar.open('O preço de venda do produto está vazio, preciso preencher!','', {
        duration: this.messageTime
      });
    }
    if (this.productModel.quantityStock == 0) {
      this._snackBar.open('A quantidade no estoque do produto! está vazio, preciso preencher','', {
        duration: this.messageTime
      });
    }
  }

  public authenticatedUser(){
    // 👉️ User Login
    const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.productModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.productModel.userName = userNameLogin.value;
    }
}

  public successMessage(){
    this._snackBar.open('O produto "'+ this.productModel.productName +'" foi cadastrado com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar o produto "'+ this.productModel.productName +'" !','', {
      duration: this.messageTime
  });
    }
}




