import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PaymentListService } from './payment-list.service';
import { PaymentModel } from 'src/interface/payment.interface';

let ELEMENT_DATA: PaymentModel[];

@Component({
  selector: 'payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})

export class PaymentListComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['id','command','formOfPayment','paymentAmount','paymentType'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

  //Property DataSource
  private _dataSource: PaymentModel[] = [];
  get dataSource() { return this._dataSource; }
  set dataSource(value) { this._dataSource = value; }

  //Property ClickedRows
  private _clickedRows = new Set<PaymentModel>();
  get clickedRows() { return this._clickedRows; }
  set clickedRows(value) { this._clickedRows = value; }
  
  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }

  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }
  
  // #endregion

  //region [Constructor]
  constructor(private paymentListService: PaymentListService,
              private router: Router) { }
  //endregion
  
  //region [Methods]
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.paymentListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar os pagamentos', err);
    })
  }

  reply(){
    this.router.navigate(['main']);
  }
  //endregion

}


