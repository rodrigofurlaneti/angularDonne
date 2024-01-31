import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { BrandUpdateService } from './brand-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrandModel } from 'src/interface/brand.interface';

let ELEMENT_DATA: BrandModel[];

@Component({
  selector: 'brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})

export class BrandUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['brandName'];
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

  //Property MessageBrandName
  private _messageBrandName: string = '';
  get messageBrandName() { return this._messageBrandName; }
  set messageBrandName(value) { this._messageBrandName = value; }
  
  //Property BrandModel
  private _brandModel = new BrandModel();
  get brandModel() { return this._brandModel; }
  set brandModel(value) { this._brandModel = value; }

  //Property IsIdZero
  private _isIdZero: boolean = true;
  get isIdZero() { return this._isIdZero; }
  set isIdZero(value) { this._isIdZero = value; }

  //Property IsIdGreaterThanZero
  private _isIdGreaterThanZero: boolean = false;
  get isIdGreaterThanZero() { return this._isIdGreaterThanZero; }
  set isIdGreaterThanZero(value) { this._isIdGreaterThanZero = value; }

  //Property Status
  private _status: string = '';
  get status() { return this._status; }
  set status(value) { this._status = value; }

  //Property Ids
  private _ids: number = 0;
  get ids() { return this._ids; }
  set ids(value) { this._ids = value; }

  // #endregion

  //#region [Constructor]
  constructor(private brandUpdateService: BrandUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  //#endregion
  
  //#region [Methods]

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
    updateBtn.style.display = 'none';
  }

  list() {
    this.brandUpdateService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log('Erro ao listar as marcas dos veículos!', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.brandUpdateService.getById(id)
                              .subscribe(brand => { 
                                this.brandModel.brandId = brand.brandId;
                                this.brandModel.brandName = brand.brandName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<BrandModel>();

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public update() {

    this.brandModel = this.checkFields(this.brandModel);

    //update
    if(this.brandModel.brandName != "")
    {
      this.brandUpdateService.update(this.brandModel).subscribe(brand => { 
        this.successMessage();
        this.reply();
      }, err => {
        this.errorMessage();
      });
    }
  }

  public checkFields(objbrandModel : BrandModel) : BrandModel
  {
    if(objbrandModel.brandName == "")
    {
      this.messageBrandName = 'Não está preenchido o campo nome da marca do veículo!';
      this._snackBar.open(this.messageBrandName,'', {
        duration: this.messageTime
      });
    }
    return objbrandModel;
  }

  public successMessage(){
    this.messageSuccess = 'A marca do veículo foi atualizada com sucesso!';
    this._snackBar.open(this.messageSuccess,'', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao atualizar a marca do veículo!'
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}