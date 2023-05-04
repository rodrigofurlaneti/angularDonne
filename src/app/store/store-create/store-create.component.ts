import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreCreateService } from './store-create.service';
import { StoreModel } from '../../../interface/store.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { StoreIdService } from 'src/app/store-id.service';

@Component({
  selector: 'store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})

export class StoreCreateComponent {

  storeModel = new StoreModel();

  statusStore: boolean = true;

  constructor(private storeCreateService: StoreCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router,
    private storeIdService: StoreIdService) { }

  onChangeDemo(ob: MatCheckboxChange) {
      this.statusStore = ob.checked;
  }

  save() {
    if(this.storeModel.storeName == "")
    {
      this._snackBar.open('O nome da loja está vazio, necessário o preenchimento!', 'Voltar', {
        duration: 1300
      });
    }
    if(this.storeModel.storeCnpj == "")
    {
      this._snackBar.open('O número do CNPJ da loja está vazio, necessário o preenchimento!', 'Voltar', {
        duration: 1300
      });
    }
    if(this.storeModel.storeAddress == "")
    {
      this._snackBar.open('O endereço da loja está vazio, necessário o preenchimento!', 'Voltar', {
        duration: 1300
      });
    }
    if(this.storeModel.storeName != '' && this.storeModel.storeCnpj != '' && this.storeModel.storeAddress != '' )
    {
      this.storeModel.status = this.statusStore;
      this.storeModel.storeId = parseInt(this.storeIdService.storeId);
      console.log(this.storeModel);
      this.storeCreateService.save(this.storeModel).subscribe(store => {
        this._snackBar.open('A loja "'+this.storeModel.storeName+'", foi cadastrada com sucesso!', 'Voltar', {
          duration: 1300
        });
        this.router.navigate(['store-list']);
      }, err => {
        this._snackBar.open('Erro ao cadastrar a loja "'+this.storeModel.storeName+'", necessário refazer o procedimento!', 'Voltar', {
          duration: 1300
        });
        console.log('Erro ao adicionar o perfil!', err);
      })
    }
  }

  reply(){
    this.router.navigate(['main']);
  }
}




