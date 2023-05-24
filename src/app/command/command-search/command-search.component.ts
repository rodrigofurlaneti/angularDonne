import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommandSearchService } from './command-search.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandModel } from 'src/interface/command.interface';
import { CommandOrderModel } from 'src/interface/commandOrder.interface';

let ELEMENT_DATA_COMMAND: CommandModel[];
let ELEMENT_DATA_COMMAND_ORDER: CommandOrderModel[];

@Component({
  selector: 'command-search',
  templateUrl: './command-search.component.html',
  styleUrls: ['./command-search.component.css']
})

export class CommandSearchComponent {
  
  isIdZero = true;

  isIdGreaterThanZero = false;

  displayedColumns: string[] = ['id','name'];

  displayedColumnsCommandOrder: string[] = ['product','amount','salePrice','totalSalePrice'];

  commandOrderModel = new CommandOrderModel();

  totalCommand = 0.00;

  buyerName:string = '';

  commandId:number = 0;

  constructor(private commandSearchService: CommandSearchService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {  }

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.commandSearchService.list().subscribe(list => {
      ELEMENT_DATA_COMMAND = list;
      this.dataSource = ELEMENT_DATA_COMMAND;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public listCommandOrdersByIdNumber(id: number) {
     this.commandSearchService.listCommandOrdersByIdNumber(id)
                              .subscribe(listResponse => { 
                                let len = listResponse.length;
                                if(len > 0){
                                  for (let i = 0; i <= len; i++) {
                                    if(listResponse[i] !== undefined){
                                      this.commandId = listResponse[i].commandId;
                                      this.buyerName = listResponse[i].buyerName;
                                      this.totalCommand = parseFloat(listResponse[i].totalSalePrice) + this.totalCommand;
                                      this.commandOrderModel.totalCommand = this.totalCommand.toFixed(2).toString(); 
                                      this.isIdZero = false;
                                      this.isIdGreaterThanZero = true;
                                      ELEMENT_DATA_COMMAND_ORDER = listResponse;
                                      this.dataSourceCommandOrder = ELEMENT_DATA_COMMAND_ORDER;
                                    }
                                  }
                                }
                             });
  }

  dataSource = ELEMENT_DATA_COMMAND;
  clickedRows = new Set<CommandModel>();

  dataSourceCommandOrder = ELEMENT_DATA_COMMAND_ORDER;
  clickedRowsCommandOrder = new Set<CommandOrderModel>();
  
  reply() {
    this.router.navigate(['main']);
  }
}