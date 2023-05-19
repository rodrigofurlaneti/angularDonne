import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommandSearchService } from './command-search.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandModel } from 'src/interface/command.interface';
import { CommandOrderModel } from 'src/interface/commandOrder.interface';

let ELEMENT_DATA: CommandModel[];
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

  displayedColumnsCommandOrder: string[] = ['id','name','product','amount','salePrice'];

  commandOrderModel = new CommandOrderModel();

  constructor(private commandSearchService: CommandSearchService,
    private _snackBar: MatSnackBar, 
    private readonly router: Router) {  }

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.commandSearchService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  public listCommandOrdersByIdNumber(id: number) {
     this.commandSearchService.listCommandOrdersByIdNumber(id)
                              .subscribe(list => { 
                                console.log(list);
                                let len = list.length;
                                if(len > 0){
                                  for (let i = 0; i <= len; i++) {
                                    this.commandOrderModel.commandId = list[i].commandId;
                                    this.commandOrderModel.buyerId = list[i].buyerId;
                                    this.commandOrderModel.buyerName = list[i].buyerName;
                                    this.commandOrderModel.productId = list[i].productId;
                                    this.commandOrderModel.productName = list[i].productName;
                                    this.commandOrderModel.amount = list[i].amount;
                                    this.commandOrderModel.salePrice = list[i].salePrice;
                                    this.isIdZero = false;
                                    this.isIdGreaterThanZero = true;
                                    console.log(this.commandOrderModel);
                                    ELEMENT_DATA_COMMAND_ORDER = list;
                                    this.dataSourceCommandOrder = ELEMENT_DATA_COMMAND_ORDER;
                                  }
                                }

                             });
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<CommandModel>();

  dataSourceCommandOrder = ELEMENT_DATA_COMMAND_ORDER;
  clickedRowsCommandOrder = new Set<CommandOrderModel>();
  
  reply() {
    this.router.navigate(['main']);
  }
}