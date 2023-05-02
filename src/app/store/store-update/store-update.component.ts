import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { StoreUpdateService } from './store-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreModel } from 'src/interface/store.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';

let ELEMENT_DATA: StoreModel[];

@Component({
  selector: 'store-update',
  templateUrl: './store-update.component.html',
  styleUrls: ['./store-update.component.css']
})

export class StoreUpdateComponent implements OnInit {

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  storeModel = new StoreModel();

  statusStore: boolean = true;
   
  constructor(private storeUpdateService: StoreUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
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
    this.storeUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  onChangeDemo(ob: MatCheckboxChange) {
    this.statusStore = ob.checked;
}

  public getById(id: number) {
    this.showUpdateButton();
    this.storeUpdateService.getById(id)
                              .subscribe(store => { 
                                this.storeModel.storeId = store.storeId;
                                this.storeModel.storeName = store.storeName;
                                this.storeModel.storeCnpj = store.storeCnpj;
                                this.storeModel.storeAddress = store.storeAddress;
                                this.storeModel.status = store.status;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<StoreModel>();

  reply(){
    this.router.navigate(['main']);
  }

  public update() {
    this.storeModel;
    this.storeUpdateService.update(this.storeModel)
                              .subscribe(store => { 
                                this._snackBar.open('A loja "'+this.storeModel.storeName+'", foi atualizada com sucesso!', 'Voltar', {
                                  duration: 1300
                                });
                                this.reply();
                              }, err => {
                                this._snackBar.open('Erro ao atualizar a loja "'+ this.storeModel.storeName +'", necessário refazer o procedimento!', 'Voltar', {
                                  duration: 1300
                                });
                                console.log('Erro ao listar as categorias', err);
                              });
  }
}