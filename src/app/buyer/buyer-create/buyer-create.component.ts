import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuyerCreateService } from './buyer-create.service';
import { BuyerModel } from '../../../interface/buyer.interface';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';  

@Component({
  selector: 'buyer-create',
  templateUrl: './buyer-create.component.html',
  styleUrls: ['./buyer-create.component.css']
})

export class BuyerCreateComponent {
  
  buyerModel = new BuyerModel();

  constructor(private buyerCreateService: BuyerCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router,private storeNameService: StoreNameService, private storeIdService: StoreIdService) { }

  save() {
    
    //check fields
    if(this.buyerModel.buyerName == "")
    {
      this._snackBar.open('Não está preenchido o campo nome do cliente!', 'Voltar', {
        duration: 1300
      });
    }
    if(this.buyerModel.buyerAddress == "")
    {
      this._snackBar.open('Não está preenchido o campo endereço do cliente!', 'Voltar',{
        duration: 1300
      });
    }
    if(this.buyerModel.buyerPhone == "")
    {
      this._snackBar.open('Não está preenchido o campo telefone do cliente!', 'Voltar',{
        duration: 1300
      });
    }

    //save
    if(this.buyerModel.buyerName != "" && this.buyerModel.buyerAddress != "" && this.buyerModel.buyerPhone != "")
    {
      this.buyerModel.StoreName = this.storeNameService.storeName;
      this.buyerModel.StoreId = this.storeIdService.storeId;
      this.buyerCreateService.save(this.buyerModel).subscribe(buyer => {
        this._snackBar.open('O cliente '+ this.buyerModel.buyerName +', foi cadastrado com sucesso!', 'Voltar',{
          duration: 1300
        });
        this.router.navigate(['buyer-list']);
        }, err => {
          this._snackBar.open('Erro ao cadastrar o cliente '+this.buyerModel.buyerName+', necessário refazer o procedimento!', 'Voltar',{
            duration: 1300
          });
        })
      }
    }
  reply(){
    this.router.navigate(['main']);
  }
}




