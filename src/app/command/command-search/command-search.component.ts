import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommandSearchService } from './command-search.service';
import { CommandModel } from 'src/interface/command.interface';
import { CommandOrderModel } from 'src/interface/commandOrder.interface';

@Component({
  selector: 'command-search',
  templateUrl: './command-search.component.html',
  styleUrls: ['./command-search.component.css']
})

export class CommandSearchComponent {
  
  //#region [Properties]
  //Property IsIdZero
  private _isIdZero: boolean = true;
  get isIdZero() { return this._isIdZero; }
  set isIdZero(value) { this._isIdZero = value; }

  //Property IsIdGreaterThanZero
  private _isIdGreaterThanZero: boolean = false;
  get isIdGreaterThanZero() { return this._isIdGreaterThanZero; }
  set isIdGreaterThanZero(value) { this._isIdGreaterThanZero = value; }

  //Property DisplayedColumns
  private _displayedColumns: string[] = ['id','name'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DisplayedColumnsCommandOrder
  private _displayedColumnsCommandOrder: string[] = ['product','amount','salePrice','totalSalePrice'];
  get displayedColumnsCommandOrder() { return this._displayedColumnsCommandOrder; }
  set displayedColumnsCommandOrder(value) { this._displayedColumnsCommandOrder = value; }

  //Property CommandOrderModel
  private _commandOrderModel = new CommandOrderModel();
  get commandOrderModel() { return this._commandOrderModel; }
  set commandOrderModel(value) { this._commandOrderModel = value; }

  //Property TotalCommand
  private _totalCommand:number = 0.00;
  get totalCommand() { return this._totalCommand; }
  set totalCommand(value) { this._totalCommand = value; }

  //Property CommandModel
  private _commandModel = new CommandModel();
  get commandModel() { return this._commandModel; }
  set commandModel(value) { this._commandModel = value; }

  //Property Set<CommandModel>
  private _clickedRows = new Set<CommandModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }

  //Property Set<CommandModel>
  private _clickedRowsCommandOrder = new Set<CommandOrderModel>();
  get clickedRowsCommandOrder() { return this._clickedRowsCommandOrder; }
  set clickedRowsCommandOrder(value) { this._clickedRowsCommandOrder = value; }

  dataSource: any;

  dataSourceCommandOrder: any;

  //#endregion

  //#region [Constructor]
  constructor(private commandSearchService: CommandSearchService,
    private readonly router: Router) {  }
  //#endregion

  //#region [Methods]
  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.commandSearchService.list().subscribe(list => {
      this.dataSource = list;
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
                                      this.commandModel.commandId = listResponse[i].commandId;
                                      this.commandModel.buyerName = listResponse[i].buyerName;
                                      this.totalCommand = parseFloat(listResponse[i].totalSalePrice) + this.totalCommand;
                                      this.commandOrderModel.totalCommand = this.totalCommand.toFixed(2).toString(); 
                                      this.isIdZero = false;
                                      this.isIdGreaterThanZero = true;
                                      this.dataSourceCommandOrder = listResponse;
                                    }
                                  }
                                }
                             });
  }
 
  reply() {
    this.router.navigate(['main']);
  }
  //#endregion
}