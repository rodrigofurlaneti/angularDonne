import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductCreateService } from './product-create.service';
import { ProductModel } from '../../../interface/product.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { MatSelect } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { MatCheckboxChange, MatCheckboxClickAction } from '@angular/material/checkbox';
import { CategoryListService } from 'src/app/category/category-list/category-list.service';
import {
  MAT_CHECKBOX_DEFAULT_OPTIONS,
  MatCheckboxDefaultOptions
} from '@angular/material/checkbox';


let ELEMENT_DATA_CATEGORY: CategoryModel[];

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: [{provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions}]
})

export class ProductCreateComponent {

  //#region [Properties]
  //Property NeedToPrint
  private _needToPrint: boolean = true;
  get needToPrint() { return this._needToPrint; }
  set needToPrint(value) { this._needToPrint = value; }

  //Property ProductStatus
  private _productStatus: boolean = true;
  get productStatus() { return this._productStatus; }
  set productStatus(value) { this._productStatus = value; }

  //Property CategoryNameSelect
  private _categoryNameSelect: string = "";
  get categoryNameSelect() { return this._categoryNameSelect; }
  set categoryNameSelect(value) { this._categoryNameSelect = value; }

  //Property CategoryNameSelect
  private _categoryIDSelect: number = 0;
  get categoryIDSelect() { return this._categoryIDSelect; }
  set categoryIDSelect(value) { this._categoryIDSelect = value; }

  //Property ProductModel
  private _productModel = new ProductModel();
  get productModel() { return this._productModel; }
  set productModel(value) { this._productModel = value; }

  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DisableSelect
  private _disableSelect = new FormControl(false);
  get disableSelect() { return this._disableSelect; }
  set disableSelect(value) { this._disableSelect = value; }

  //Property SelectedCategory
  private _selectedCategory: CategoryModel = new CategoryModel();
  get selectedCategory() { return this._selectedCategory; }
  set selectedCategory(value) { this._selectedCategory = value; }

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }
  
  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }
  
  //Property MessageSuccess
  private _messageSuccess: string = '';
  get messageSuccess() { return this._messageSuccess; }
  set messageSuccess(value) { this._messageSuccess = value; }
  
  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }
  
  //Property CategoryModel
  private _categoryModel = new CategoryModel();
  get categoryModel() { return this._categoryModel; }
  set categoryModel(value) { this._categoryModel = value; }

  //Property MessageCategoryName
  private _messageCategoryName : string = '';
  get messageCategoryName() { return this._messageCategoryName; }
  set messageCategoryName(value) { this._messageCategoryName = value; }
  
  // #endregion

  //#region [Constructor]

  constructor(private productCreateService: ProductCreateService,
    private categoryListService: CategoryListService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {
  }

  //#endregion

  @ViewChild('matSelect')
  matSelect!: MatSelect;

  //#region [Methods]

  ngOnInit(): void {
    this.listCategory();
  }

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(obj => {
      this.selectedCategory.categoryName = obj.CategoryName;
    });
  }

  listCategory() {
    this.categoryListService.list().subscribe(list => {
      ELEMENT_DATA_CATEGORY = list;
      this.dataSourceCategory = ELEMENT_DATA_CATEGORY;
    }, err => {
      console.log('Erro ao listar os perfis', err);
    })
  }

  items = [{ selected: false, label: '' }];
  status = [{ selected: false, label: 'Status do produto?' }];

  onChange(event: MatCheckboxChange) {
    if(event.checked)
      this.needToPrint = true;
  }

  onClickNeedToPrint():void {
    this.needToPrint = !this.needToPrint;
    if(this.needToPrint)
      this.productModel.needToPrint = 1;
    else
      this.productModel.needToPrint = 0;
  }

  onClickProductStatus():void {
    this.productStatus = !this.productStatus;
    if(this.productStatus)
      this.productModel.status = 1;
    else
      this.productModel.status = 0;
  }

  change(event: any) {
    this.categoryIDSelect = event.categoryId;
    this.categoryNameSelect = event.categoryName;
  }

  calculate(){
    let totalValueCostOfInventory = parseFloat(this.productModel.costPrice) * this.productModel.quantityStock;
    this.productModel.totalValueCostOfInventory = totalValueCostOfInventory.toString();
    let totalValueSaleStock = parseFloat(this.productModel.salePrice) * this.productModel.quantityStock;
    this.productModel.totalValueSaleStock = totalValueSaleStock.toString();
  }

  calculateQuantityToBuy(){
    if(this.productModel.quantityStock < this.productModel.minimumStockQuantity)
    {
      let quantityToBuy = this.productModel.quantityStock - this.productModel.minimumStockQuantity;
      this.productModel.quantityToBuy = quantityToBuy;
      let totalValueOfLastPurchase = quantityToBuy * parseFloat(this.productModel.costPrice);
      this.productModel.totalValueOfLastPurchase = totalValueOfLastPurchase.toString();
    }
    if(this.productModel.quantityStock >= this.productModel.minimumStockQuantity)
    {
      this.productModel.totalValueOfLastPurchase = '0';
      this.productModel.quantityToBuy = 0;
    }
  }
 
  save() {
    //CheckFields
    this.checkFields();

    //save
    if (this.productModel.productName != '' && this.productModel.costPrice != '' && this.productModel.salePrice != '' && this.productModel.quantityStock != 0) {
      this.authenticatedUser();
      console.log(this.productModel);
      this.productModel.categoryName = this.categoryNameSelect;
      this.productModel.categoryId = this.categoryIDSelect;
      this.productModel.costPrice = parseFloat(this.productModel.costPrice).toString(); //parseFloat(priceCost)
      this.productModel.salePrice = parseFloat(this.productModel.salePrice).toString(); //parseFloat(priceSale)
      this.productModel.quantityToBuy = this.productModel.quantityToBuy;
      this.productModel.totalValueOfLastPurchase = parseFloat(this.productModel.totalValueOfLastPurchase).toString(); 
      this.productCreateService.save(this.productModel).subscribe(product => {
        this.successMessage();
        this.productList();
      }, err => {
        this.errorMessage();
      })
    }
  }

  dataSourceCategory = ELEMENT_DATA_CATEGORY;

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
    //Verifica de a opção imprimir foi clicada, caso não pega o padrão.
    if(this.productModel.needToPrint == 0 && this.needToPrint){
      this.productModel.needToPrint = 1;
    }
    //Verifica de a opção ativo foi clicada, caso não pega o padrão.
    if(this.productModel.status == 0 && this.productStatus){
      this.productModel.status = 1;
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

  //#endregion
  
}




