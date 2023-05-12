import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommandUpdateService } from './command-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandModel } from 'src/interface/command.interface';

let ELEMENT_DATA: CommandModel[];

@Component({
  selector: 'command-update',
  templateUrl: './command-update.component.html',
  styleUrls: ['./command-update.component.css']
})

export class CommandUpdateComponent implements OnInit {

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  commandModel = new CommandModel();

  messageTime: number = 5000;
   
  constructor(private commandUpdateService: CommandUpdateService,
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
    this.commandUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.commandUpdateService.getById(id)
                              .subscribe(command => { 
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<CommandModel>();

  reply(){
    this.router.navigate(['main']);
  }

  public update() {
    
    //checkFields
    if(this.commandModel.buyerName == '')
    {
      this._snackBar.open('O nome do cliente está vazio,' + this.commandModel.buyerId  + ' precisa preencher! ','', {
        duration: this.messageTime
      });
    }

    //save
    if(this.commandModel.buyerName != "")
    {
      this.authenticatedUser();
      this.commandUpdateService.update(this.commandModel)
                                .subscribe(command => { 
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
      this.commandModel.userId = parseInt(userIdLogin.value);
    }
    const userNameLogin = <HTMLElement>document.getElementById('userNameLogin')as HTMLInputElement;
    if (userIdLogin != null) {
      this.commandModel.userName = userNameLogin.value;
    }
  }

  public successMessage(){
    this._snackBar.open('A comanda "'+ this.commandModel.buyerName +'" foi atualizado com sucesso!','', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this._snackBar.open('Erro ao atualizar a comanda "'+ this.commandModel.buyerName +'" !','', {
      duration: this.messageTime
    });
  }
}