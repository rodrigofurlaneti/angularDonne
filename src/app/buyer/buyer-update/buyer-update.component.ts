import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { BuyerUpdateService } from './buyer-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuyerModel } from 'src/interface/buyer.interface';

let ELEMENT_DATA: BuyerModel[];

@Component({
  selector: 'buyer-update',
  templateUrl: './buyer-update.component.html',
  styleUrls: ['./buyer-update.component.css']
})

export class BuyerUpdateComponent implements OnInit {

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  buyerModel = new BuyerModel();
   
  constructor(private buyerUpdateService: BuyerUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();    
  }

  list() {
    this.buyerUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.buyerUpdateService.getById(id)
                              .subscribe(buyer => { 
                                this.buyerModel.buyerId = buyer.buyerId;
                                this.buyerModel.buyerName = buyer.buyerName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<BuyerModel>();

  reply(){
    this.router.navigate(['main']);
  }

  public update() {

    //check fields
    if(this.buyerModel.buyerName == "")
    {
      this._snackBar.open('Não está preenchido o campo nome do cliente!', 'Voltar');
    }
    if(this.buyerModel.buyerAddress == "")
    {
      this._snackBar.open('Não está preenchido o campo endereço do cliente!', 'Voltar');
    }
    if(this.buyerModel.buyerPhone == "")
    {
      this._snackBar.open('Não está preenchido o campo telefone do cliente!', 'Voltar');
    }

    //update
    if(this.buyerModel.buyerName != "" && this.buyerModel.buyerAddress != "" && this.buyerModel.buyerPhone != "")
    {
      this.buyerUpdateService.update(this.buyerModel).subscribe(buyer => { 
        this._snackBar.open('O cliente "'+ this.buyerModel.buyerName +'", foi atualizado com sucesso!', 'Voltar');
        this.reply();
      }, err => {
        let message = 'Erro ao atualizar o cliente '+ this.buyerModel.buyerName +', necessário refazer o procedimento!';
        this._snackBar.open(message, 'Voltar');
        console.log(message, err);
      });

    }
  }
}