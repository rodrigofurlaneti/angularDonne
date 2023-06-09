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

  messageTime: number = 5000;
   
  constructor(private buyerUpdateService: BuyerUpdateService,
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
    this.buyerUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.buyerUpdateService.getById(id)
                              .subscribe(buyer => { 
                                this.buyerModel.buyerId = buyer.buyerId;
                                this.buyerModel.buyerName = buyer.buyerName;
                                this.buyerModel.buyerAddress = buyer.buyerAddress;
                                this.buyerModel.buyerPhone = buyer.buyerPhone;
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
      this._snackBar.open('Não está preenchido o campo nome do cliente!','', {
        duration: this.messageTime
      });
    }
    if(this.buyerModel.buyerAddress == "")
    {
      this._snackBar.open('Não está preenchido o campo endereço do cliente!','', {
        duration: this.messageTime
      });
    }
    if(this.buyerModel.buyerPhone == "")
    {
      this._snackBar.open('Não está preenchido o campo telefone do cliente!','', {
        duration: this.messageTime
      });
    }

    //update
    if(this.buyerModel.buyerName != "" && this.buyerModel.buyerAddress != "" && this.buyerModel.buyerPhone != "")
    {
      this.authenticatedUser();
      this.buyerUpdateService.update(this.buyerModel).subscribe(buyer => { 
        this.successMessage();
        this.reply();
      }, err => {
        this.errorMessage();
      });
    }
  }

  public authenticatedUser(){
    // 👉️ User Login
    const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.buyerModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.buyerModel.userName = userNameLogin.value;
    }
}

  public successMessage(){
    this._snackBar.open('O cliente "'+ this.buyerModel.buyerName +'" foi atualizado com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao atualizar o cliente "'+ this.buyerModel.buyerName +'" !','', {
      duration: this.messageTime
    });
  }
}