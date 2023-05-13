import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

import { CommandCreateService } from './command-create.service';
import { CommandModel } from '../../../interface/command.interface';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelect } from '@angular/material/select';

import { BuyerModel } from 'src/interface/buyer.interface';

let ELEMENT_DATA_BUYER: BuyerModel[];

@Component({
  selector: 'command-create',
  templateUrl: './command-create.component.html',
  styleUrls: ['./command-create.component.css']
})

export class CommandCreateComponent {
  
  commandModel = new CommandModel();

  buyerNameSelect: string = "";

  messageTime: number = 5000;

  constructor(private commandCreateService: CommandCreateService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {  }

  @ViewChild('matSelect')
  matSelect!: MatSelect;

  ngOnInit(): void {
    this.listBuyer();
  }

  listBuyer() {
    this.commandCreateService.listBuyer().subscribe(list => {
      ELEMENT_DATA_BUYER = list;
      this.dataSourceBuyer = ELEMENT_DATA_BUYER;
    }, err => {
      console.log('Erro ao listar os clientes', err);
    })
  }

  changeBuyerToCommand(event: any) {
    this.commandModel.buyerId = event.buyerId;
    this.commandModel.buyerName = event.buyerName;
  }

  saveBuyerToCommand() {
    //checkFields

    //save
    if (this.commandModel.buyerName != "") {
      this.authenticatedUser();
      this.commandCreateService.saveClient(this.commandModel).subscribe(buyerResponse => {
        this.commandModel.commandId = buyerResponse;
        this.successMessage();
      }, err => {
        this._snackBar.open('Erro ao cadastrar o novo cliente "' + this.commandModel.buyerName + '" foi cadastrada com sucesso!', '', {
          duration: this.messageTime
        });
        console.log('Erro ao cadastrar o novo cliente "' + this.commandModel.buyerName + '", necessário refazer o procedimento!', err);
      })
    }
  }

  dataSourceBuyer = ELEMENT_DATA_BUYER;

  saveProductToCommand() {
    // Check fields

    // Save 
  }

  reply() {
    this.router.navigate(['main']);
  }

  commandsList() {
    this.router.navigate(['commands-list']);
  }

  public authenticatedUser(){
    // 👉️ User Login
    const userIdLogin = <HTMLElement>document.getElementById('userIdLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.commandModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.commandModel.userName = userNameLogin.value;
    }
}

  public successMessage(){
    this._snackBar.open('A comanda "'+ this.commandModel.buyerName +'" foi cadastrado com sucesso!','', {
    duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao cadastrar a comanda "'+ this.commandModel.buyerName +'" !','', {
      duration: this.messageTime
    });
  }
}