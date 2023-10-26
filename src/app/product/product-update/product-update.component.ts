import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductUpdateService } from './product-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from 'src/interface/product.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CategoryListService } from 'src/app/category/category-list/category-list.service';

let ELEMENT_DATA: ProductModel[];
let ELEMENT_DATA_CATEGORY: CategoryModel[];

@Component({
  selector: 'product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {

  selectedValue: string = " ";
  needToPrint: boolean = false;
  productStatus: boolean = false;
  categoryNameSelect: string = " ";
  categoryIDSelect: number = 0;
  productID: number = 0;

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  ids: number = 0;

  productModel = new ProductModel();
   
  constructor(private productUpdateService: ProductUpdateService,
    private categoryListService: CategoryListService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();  
    this.listCategory();  
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

  listCategory() {
    this.categoryListService.list().subscribe(list => {
      ELEMENT_DATA_CATEGORY = list;
      this.dataSourceCategory = ELEMENT_DATA_CATEGORY;
    }, err => {
      console.log('Erro ao listar as categorias ', err);
    })
  }

  items = [{ selected: false, label: 'Precisa imprimir?' }];
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
    console.log(event.categoryName);
  }

  calculate(){
    var totalValueCostOfInventory = parseFloat(this.productModel.costPrice) * this.productModel.quantityStock;
    this.productModel.totalValueCostOfInventory = totalValueCostOfInventory.toString();
    var totalValueSaleStock = parseFloat(this.productModel.salePrice) * this.productModel.quantityStock;
    this.productModel.totalValueSaleStock = totalValueSaleStock.toString();
  }

  list() {
    this.productUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.productUpdateService.getById(id)
                              .subscribe(product => { 
                                this.categoryNameSelect = product.categoryName;
                                this.categoryIDSelect = product.categoryId;
                                this.selectedValue = product.categoryId;
                                this.productModel.productId = product.productId;
                                this.productModel.productName = product.productName;
                                this.productModel.categoryId = product.categoryId;
                                this.productModel.categoryName = product.categoryName;
                                this.productModel.costPrice = product.costPrice;
                                this.productModel.salePrice = product.salePrice;
                                this.productModel.needToPrint = product.needToPrint;
                                this.productModel.quantityStock = product.quantityStock;
                                this.productModel.status = product.status;
                                this.productModel.userId = product.userId;
                                this.productModel.userName = product.userName;
                                this.productModel.totalValueCostOfInventory = product.totalValueCostOfInventory;
                                this.productModel.totalValueSaleStock = product.totalValueSaleStock;
                                this.productModel.minimumStockQuantity = product.minimumStockQuantity;
                                this.productModel.productId = product.id;
                                this.needToPrint = product.needToPrint;
                                this.productStatus = product.status;
                                this.productID = id;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<ProductModel>();

  dataSourceCategory = ELEMENT_DATA_CATEGORY;

  reply(){
    this.router.navigate(['main']);
  }

  public update() {
    this.productModel.productId = this.productID;
    this.productModel.productName = (<HTMLSelectElement>document.getElementById('nameProduct')).value;
    this.productModel.categoryName = this.categoryNameSelect;
    this.productModel.categoryId = this.categoryIDSelect;
    this.productModel.costPrice = parseFloat(this.productModel.costPrice).toString();
    this.productModel.salePrice = parseFloat(this.productModel.salePrice).toString();
    this.productModel.needToPrint = this.needToPrint;
    this.productModel.status = this.productStatus;

    this.productModel.totalValueCostOfInventory = (this.productModel.quantityStock * parseFloat(this.productModel.costPrice)).toString();
    this.productModel.totalValueSaleStock = (this.productModel.quantityStock * parseFloat(this.productModel.salePrice)).toString();
    this.productModel.minimumStockQuantity = 0;
    this.productUpdateService.update(this.productModel)
                              .subscribe(product => { 
                                this._snackBar.open('Categoria atualizada com sucesso!','', {
                                  duration: 2000
                                });
                                this.reply();

                              });
  }
}
