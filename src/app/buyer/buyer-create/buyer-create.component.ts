import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuyerCreateService } from './buyer-create.service';
import { BuyerModel } from '../../../interface/buyer.interface';

@Component({
  selector: 'buyer-create',
  templateUrl: './buyer-create.component.html',
  styleUrls: ['./buyer-create.component.css']
})

export class BuyerCreateComponent {
  
  buyerModel = new BuyerModel();

  constructor(private buyerCreateService: BuyerCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }

  save() {
    
    //check fields
    if(this.buyerModel.buyerName == "")
    {
      this._snackBar.open('Não está preenchido o campo nome do cliente!', 'Voltar', {
        duration: 2000
      });
    }
    if(this.buyerModel.buyerAddress == "")
    {
      this._snackBar.open('Não está preenchido o campo endereço do cliente!', 'Voltar',{
        duration: 2000
      });
    }
    if(this.buyerModel.buyerPhone == "")
    {
      this._snackBar.open('Não está preenchido o campo telefone do cliente!', 'Voltar',{
        duration: 2000
      });
    }

    //save
    if(this.buyerModel.buyerName != "" && this.buyerModel.buyerAddress != "" && this.buyerModel.buyerPhone != "")
    {
      this.buyerCreateService.save(this.buyerModel).subscribe(buyer => {
        this._snackBar.open('O cliente '+ this.buyerModel.buyerName +', foi cadastrado com sucesso!','',{
          duration: 2000
        });
        this.router.navigate(['buyer-list']);
        }, err => {
          this._snackBar.open('Erro ao cadastrar o cliente '+this.buyerModel.buyerName+', necessário refazer o procedimento!','',{
            duration: 2000
          });
        })
      }
    }
  reply(){
    this.router.navigate(['main']);
  }
}




