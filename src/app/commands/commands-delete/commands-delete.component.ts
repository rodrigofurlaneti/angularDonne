import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommandsDeleteService } from './commands-delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandsModel } from 'src/interface/commands.interface';

let ELEMENT_DATA: CommandsModel[];

@Component({
  selector: 'commands-delete',
  templateUrl: './commands-delete.component.html',
  styleUrls: ['./commands-delete.component.css']
})
export class CommandsDeleteComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  status: string = '';

  ids: number = 0;

  constructor(private commandsDeleteService: CommandsDeleteService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.commandsDeleteService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public delete(id: number) {
    this.commandsDeleteService.delete(id).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['main']);
    this._snackBar.open('A categoria foi excluida com sucesso!','', {
      duration: 2000
    });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<CommandsModel>();

  reply(){
    this.router.navigate(['main']);
  }
}
