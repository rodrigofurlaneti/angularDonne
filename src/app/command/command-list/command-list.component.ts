import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommandListService } from './command-list.service';
import { CommandModel } from 'src/interface/command.interface';

let ELEMENT_DATA: CommandModel[];

@Component({
  selector: 'command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  displayedColumns: string[] = ['id','name'];

  constructor(private commandListService: CommandListService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.commandListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as comandas!', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<CommandModel>();

  
  reply(){
    this.router.navigate(['main']);
  }
}


