import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommandsUpdateService } from './commands-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandsModel } from 'src/interface/commands.interface';

let ELEMENT_DATA: CommandsModel[];

@Component({
  selector: 'commands-update',
  templateUrl: './commands-update.component.html',
  styleUrls: ['./commands-update.component.css']
})

export class CommandsUpdateComponent implements OnInit {

  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  commandsModel = new CommandsModel();
   
  constructor(private commandsUpdateService: CommandsUpdateService,
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
    this.commandsUpdateService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.commandsUpdateService.getById(id)
                              .subscribe(commands => { 
                                this.commandsModel.storeId = commands.storeId;
                                this.commandsModel.storeName = commands.storeName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<CommandsModel>();

  reply(){
    this.router.navigate(['main']);
  }

  public update() {
    
    //checkFields
    if(this.commandsModel.commandsName == "")
    {
      this._snackBar.open('A categoria' + this.commandsModel.commandsName + 'foi atualizado com sucesso!','', {
        duration: 2000
      });
    }

    //save
    if(this.commandsModel.commandsName != "")
    {
      this.commandsUpdateService.update(this.commandsModel)
                              .subscribe(commands => { 
                                this._snackBar.open('A categoria '+ this.commandsModel.commandsName +' foi atualizada com sucesso!', 'Voltar');
                                this.reply();
                           }, err => {
                            this._snackBar.open('Erro ao atualizar a categoria '+ this.commandsModel.commandsName +', necessário refazer o procedimento!', 'Voltar');
                            console.log('Erro ao listar as categorias', err);
                          });
    }
  }
}