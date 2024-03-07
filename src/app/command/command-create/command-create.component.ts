import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { CommandCreateService } from './command-create.service';
import { CommandModel } from '../../../interface/command.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelect } from '@angular/material/select';
import { BuyerModel } from 'src/interface/buyer.interface';
import { BuyerListService } from 'src/app/buyer/buyer-list/buyer-list.service';

@Component({
  selector: 'command-create',
  templateUrl: './command-create.component.html',
  styleUrls: ['./command-create.component.css']
})

export class CommandCreateComponent {
  
  //#region [Properties]

  //Property CommandModel
  private _commandModel = new CommandModel();
  get commandModel() { return this._commandModel; }
  set commandModel(value) { this._commandModel = value; }
  
  //Property BuyerNameSelect
  private _buyerNameSelect: string = "";
  get buyerNameSelect() { return this._buyerNameSelect; }
  set buyerNameSelect(value) { this._buyerNameSelect = value; }

  //Property MessageTime
  private _messageTime: number = 2000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }
  
  //Property MessageTime
  private _dataSourceBuyer: BuyerModel[] = [];
  get dataSourceBuyer() { return this._dataSourceBuyer; }
  set dataSourceBuyer(value) { this._dataSourceBuyer = value; }

  //#endregion

  //#region [Constructor]
  
  constructor(private commandCreateService: CommandCreateService,
    private buyerListService: BuyerListService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {  }
  
  //#endregion
  
  @ViewChild('matSelect')
  matSelect!: MatSelect;

  //#region [Methods]

  ngOnInit(): void {
    this.listBuyer();
  }

  listBuyer() {
    this.buyerListService.listBuyerStatus(1).subscribe(list => {
      this.dataSourceBuyer = list;
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
        this.commandsList();
      }, err => {
        this._snackBar.open('Erro ao cadastrar o novo cliente "' + this.commandModel.buyerName + '" foi cadastrada com sucesso!', '', {
          duration: this.messageTime
        });
        console.log('Erro ao cadastrar o novo cliente "' + this.commandModel.buyerName + '", necessário refazer o procedimento!', err);
      })
    }
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
  //#endregion
}