import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductUpdateService } from './product-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from 'src/interface/product.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';
import { UserNameService } from 'src/app/user-name.service';
import { UserIdService } from 'src/app/user-id.service';

let ELEMENT_DATA: ProductModel[];
let ELEMENT_DATA_Category: CategoryModel[];

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
    private _snackBar: MatSnackBar, 
    private router: Router,
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,
    private userNameService: UserNameService,
    private userIdService: UserIdService) { }
  
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
    this.productUpdateService.listCategory().subscribe(list => {
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
    this.productStatus = event.checked;
    alert(event.checked);
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
                                this.selectedValue = product.categoryId;
                                this.productModel.productId = product.productId;
                                this.productModel.productName = product.productName;
                                this.productModel.categoryId = product.categoryId;
                                this.productModel.categoryName = product.categoryName;
                                console.log(product.categoryName);
                                this.productModel.costPrice = product.costPrice;
                                this.productModel.salePrice = product.salePrice;
                                this.productModel.imagePath = product.imagePath;
                                this.productModel.needToPrint = product.needToPrint;
                                this.productModel.quantityStock = product.quantityStock;
                                this.productModel.status = product.status;
                                this.productModel.userId = product.userId;
                                this.productModel.userName = product.userName;
                                this.productModel.storeId = product.storeId;
                                this.productModel.storeName = product.storeName;
                                this.productModel.totalValueCostOfInventory = product.totalValueCostOfInventory;
                                this.productModel.totalValueSaleStock = product.totalValueSaleStock;
                                this.productModel.minimumStockQuantity = product.minimumStockQuantity;
                                this.productModel.productId = product.id;
                                this.needToPrint = product.needToPrint;
                                this.productStatus = product.productStatus;
                                this.productID = id;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<ProductModel>();

  dataSourceCategory = ELEMENT_DATA_Category;

  reply(){
    this.router.navigate(['main']);
  }

  public update() {
    this.productModel.productId = this.productID;
    console.log(" atualização do ID conferir: " + this.productModel);
    this.productModel.productName = (<HTMLSelectElement>document.getElementById('nameProduct')).value;
    this.productModel.categoryName = this.categoryNameSelect;
    this.productModel.categoryId = this.categoryIDSelect;
    this.productModel.costPrice = parseFloat((<HTMLSelectElement>document.getElementById('costPrice')).value).toFixed(2);
    this.productModel.salePrice = parseFloat((<HTMLSelectElement>document.getElementById('salePrice')).value).toFixed(2);
    this.productModel.quantityStock = parseInt((<HTMLSelectElement>document.getElementById('quantityStock')).value);
    this.productModel.needToPrint = this.needToPrint;
    this.productModel.status = this.productStatus;
    this.productModel.storeId = parseInt(this.storeIdService.storeId);
    this.productModel.storeName = this.storeNameService.storeName;
    this.productModel.userId = parseInt(this.userIdService.userID);
    this.productModel.userName = this.userNameService.userName;
    this.productModel.totalValueCostOfInventory = ((this.productModel.quantityStock * parseFloat(this.productModel.costPrice)) / 1000).toFixed(3);
    this.productModel.totalValueSaleStock = ((this.productModel.quantityStock * parseFloat(this.productModel.salePrice)) / 1000).toFixed(3);
    this.productModel.imagePath = " "
    this.productModel.minimumStockQuantity = 0;
    this.productUpdateService.update(this.productModel)
                              .subscribe(product => { 
                                this._snackBar.open('Categoria atualizada com sucesso!', 'Voltar', {
                                  duration: 1300
                                });
                                this.reply();

                              });
  }
}