import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommandDeleteService } from './command-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandModel } from 'src/interface/command.interface';

let ELEMENT_DATA: CommandModel[];

@Component({
  selector: 'command-delete',
  templateUrl: './command-delete.component.html',
  styleUrls: ['./command-delete.component.css']
})
export class CommandDeleteComponent implements OnInit {

  displayedColumns: string[] = ['id','name'];

  status: string = '';

  ids: number = 0;

  constructor(private commandDeleteService: CommandDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.commandDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSourceCommand = ELEMENT_DATA;
      }, err => {
      console.log('Erro ao listar as comandas', err);
    })
  }

  public delete(id: number) {
    this.commandDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('A comanda foi excluida com sucesso!','', {
      duration: 2000
    });
  }

  dataSourceCommand = ELEMENT_DATA;
  clickedRows = new Set<CommandModel>();

  reply(){
    this.router.navigate(['main']);
  }
}