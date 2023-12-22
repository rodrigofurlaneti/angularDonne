import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductUpdateService } from './product-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from 'src/interface/product.interface';
import { CategoryModel } from 'src/interface/category.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CategoryListService } from 'src/app/category/category-list/category-list.service';

let ELEMENT_DATA_PRODUCT: ProductModel[];
let ELEMENT_DATA_CATEGORY: CategoryModel[];

@Component({
  selector: 'product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

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

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

  //Property MessageBuyerName
  private _messageBuyerName: string = '';
  get messageBuyerName() { return this._messageBuyerName; }
  set messageBuyerName(value) { this._messageBuyerName = value; }
  
  //Property MessageBuyerAddress
  private _messageBuyerAddress: string = '';
  get messageBuyerAddress() { return this._messageBuyerAddress; }
  set messageBuyerAddress(value) { this._messageBuyerAddress = value; }
      
  //Property MessageBuyerPhone
  private _messageBuyerPhone: string = '';
  get messageBuyerPhone() { return this._messageBuyerPhone; }
  set messageBuyerPhone(value) { this._messageBuyerPhone = value; }

  //Property ProductModel
  private _productModel = new ProductModel();
  get productModel() { return this._productModel; }
  set productModel(value) { this._productModel = value; }

  //Property IsIdZero
  private _isIdZero: boolean = true;
  get isIdZero() { return this._isIdZero; }
  set isIdZero(value) { this._isIdZero = value; }

  //Property IsIdGreaterThanZero
  private _isIdGreaterThanZero: boolean = false;
  get isIdGreaterThanZero() { return this._isIdGreaterThanZero; }
  set isIdGreaterThanZero(value) { this._isIdGreaterThanZero = value; }

  // //Property Status
  // private _status: string = '';
  // get status() { return this._status; }
  // set status(value) { this._status = value; }

  //Property Ids
  private _ids: number = 0;
  get ids() { return this._ids; }
  set ids(value) { this._ids = value; }

  //Property SelectedValue 
  private _selectedValue: string = ' ';
  get selectedValue() { return this._selectedValue; }
  set selectedValue(value) { this._selectedValue = value; }

  //Property NeedToPrint 
  private _needToPrint: boolean = false;
  get needToPrint() { return this._needToPrint; }
  set needToPrint(value) { this._needToPrint = value; }

  //Property ProductStatus 
  private _productStatus: boolean = false;
  get productStatus() { return this._productStatus; }
  set productStatus(value) { this._productStatus = value; }

  //Property CategoryObj 
  private _categoryObj: CategoryModel = new CategoryModel();
  get categoryObj() { return this._categoryObj; }
  set categoryObj(value) { this._categoryObj = value; }

  //Property CategoryNameSelect 
  private _categoryNameSelect: string = " ";
  get categoryNameSelect() { return this._categoryNameSelect; }
  set categoryNameSelect(value) { this._categoryNameSelect = value; }

  //Property CategoryIDSelect 
  private _categoryIDSelect: number = 0;
  get categoryIDSelect() { return this._categoryIDSelect; }
  set categoryIDSelect(value) { this._categoryIDSelect = value; }

  //Property ProductID 
  private _productID: number = 0;
  get productID() { return this._productID; }
  set productID(value) { this._productID = value; }

  //Property ClickedRows
  private _clickedRows = new Set<ProductModel>();
  get clickedRows() { return this._clickedRows };
  set clickedRows(value) { this._clickedRows = value };

  //Property DataSource
  private _dataSource: ProductModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  // #endregion
   
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

  change() {
      this.categoryIDSelect = this.categoryObj.categoryId;
      this.categoryNameSelect = this.categoryObj.categoryName;
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

  list() {
    this.productUpdateService.list().subscribe(list => {
      ELEMENT_DATA_PRODUCT = list
      this.dataSource = ELEMENT_DATA_PRODUCT;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.productUpdateService.getById(id)
                              .subscribe(product => { 
                                this.categoryIDSelect = product.categoryId;
                                this.categoryNameSelect = product.categoryName;
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
                                this.productModel.quantityToBuy = product.quantityToBuy;
                                this.productModel.totalValueOfLastPurchase = product.totalValueOfLastPurchase;
                                this.productID = id;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

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
    this.productModel.minimumStockQuantity = this.productModel.minimumStockQuantity;
    this.productModel.quantityToBuy = this.productModel.quantityToBuy;
    this.productModel.totalValueOfLastPurchase = this.productModel.totalValueOfLastPurchase;
    this.productModel;
    this.productUpdateService.update(this.productModel)
                              .subscribe(product => { 
                                this._snackBar.open('Produto atualizado com sucesso!','', {
                                  duration: 2000
                                });
                                this.reply();

                              });
  }
}
