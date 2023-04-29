import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreCreateService } from './store-create.service';
import { StoreModel } from '../../../interface/store.interface';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})

export class StoreCreateComponent {

  statusStore: boolean = true;

  @Input() public storeModel = new StoreModel();

  constructor(private storeCreateService: StoreCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router) { }

  onChangeDemo(ob: MatCheckboxChange) {
      this.statusStore = ob.checked;
  }

  save() {
    this.storeModel.storeName = (<HTMLSelectElement>document.getElementById('storeName')).value;
    this.storeModel.storeCnpj = (<HTMLSelectElement>document.getElementById('storeCnpj')).value;
    this.storeModel.storeAddress = (<HTMLSelectElement>document.getElementById('storeAddress')).value;

    if(this.storeModel.storeName != '' && this.storeModel.storeCnpj != '' && this.storeModel.storeAddress != '' )
    {
      this.storeModel.status = this.statusStore;
      this.storeCreateService.save(this.storeModel).subscribe(store => {
        this._snackBar.open('Perfil cadastrada com sucesso!', 'Voltar');
        this.router.navigate(['store-list']);
      }, err => {
          console.log('Erro ao adicionar o perfil!', err);
      })
    }
    if(this.storeModel.storeName == '')
    {
      this._snackBar.open('Não está preenchido o campo nome da loja!', 'Voltar');
    }
  }

  reply(){
    this.router.navigate(['main']);
  }
}




