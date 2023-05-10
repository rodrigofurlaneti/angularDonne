import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommandsListService } from './commands-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandsModel } from 'src/interface/commands.interface';

let ELEMENT_DATA: CommandsModel[];

@Component({
  selector: 'commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css']
})
export class CommandsListComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(private commandsListService: CommandsListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.commandsListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<CommandsModel>();

  reply(){
    this.router.navigate(['main']);
  }
}


