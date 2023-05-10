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
  categoryNameSelect: string = " ";
  categoryIDSelect: number = 0;

  productModel = new ProductModel();

  displayedColumns: string[] = ['name'];

  disableSelect = new FormControl(false);

  selectedCategory: CategoryModel = new CategoryModel();

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
  }

  calculate(){
    var totalValueCostOfInventory = parseFloat(this.productModel.costPrice) * this.productModel.quantityStock;
    this.productModel.totalValueCostOfInventory = totalValueCostOfInventory.toString();
    var totalValueSaleStock = parseFloat(this.productModel.salePrice) * this.productModel.quantityStock;
    this.productModel.totalValueSaleStock = totalValueSaleStock.toString();
  }
 
  save() {
    if (this.productModel.productName == '') {
      this._snackBar.open('Não está preenchido o campo nome do produto!','', {
        duration: 2000
      });
    }
    if (this.productModel.costPrice == '') {
      this._snackBar.open('Não está preenchido o campo preço de custo do produto!','', {
        duration: 2000
      });
    }
    if (this.productModel.salePrice == '') {
      this._snackBar.open('Não está preenchido o campo preço de venda do produto!','', {
        duration: 2000
      });
    }
    if (this.productModel.quantityStock == 0) {
      this._snackBar.open('Não está preenchido o campo quantidade no estoque do produto!','', {
        duration: 2000
      });
    }
    if (this.productModel.productName != '' && this.productModel.costPrice != '' && this.productModel.salePrice != '' && this.productModel.quantityStock != 0) {
      this.productModel.categoryName = this.categoryNameSelect;
      this.productModel.categoryId = this.categoryIDSelect;
      this.productModel.costPrice = parseFloat(this.productModel.costPrice).toString(); //parseFloat(priceCost)
      this.productModel.salePrice = parseFloat(this.productModel.salePrice).toString(); //parseFloat(priceSale)
      this.productModel.needToPrint = this.needToPrint;
      this.productModel.status = this.productStatus;
      this.productCreateService.save(this.productModel).subscribe(product => {
        this._snackBar.open('Produto foi cadastrado com sucesso!','', {
          duration: 2000
        });
        this.router.navigate(['product-list']);
      }, err => {
        console.log('Erro ao adicionar o novo produto!', err);
      })
    }
  }

  dataSourceCategory = ELEMENT_DATA_Category;

  reply() {
    this.router.navigate(['main']);
  }

}




