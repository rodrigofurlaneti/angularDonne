import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormOfPaymentListService } from './formofpayment-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

let ELEMENT_DATA: FormOfPaymentModel[];

@Component({
  selector: 'formofpayment-list',
  templateUrl: './formofpayment-list.component.html',
  styleUrls: ['./formofpayment-list.component.css']
})
export class FormOfPaymentListComponent implements OnInit {

  //#region [Properties]
  
    //Property DisplayedColumns
    private _displayedColumns: string[] = ['name'];
    get displayedColumns() { return this._displayedColumns; }
    set displayedColumns(value) { this._displayedColumns = value; }

    //Property DataSource
    private _dataSource: FormOfPaymentModel[] = [];
    get dataSource() { return this._dataSource; }
    set dataSource(value) { this._dataSource = value; }

    //Property ClickedRows
    private _clickedRows = new Set<FormOfPaymentModel>();
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


// #region [Constructor]

  constructor(private formOfPaymentListService: FormOfPaymentListService,
              private _snackBar: MatSnackBar, 
              private router: Router) { }
  
// #endregion

// #region [Methods]

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.formOfPaymentListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      this._snackBar.open('Erro ao listar as formas de pagamentos!','');
      console.log('Erro ao listar as formas de pagamentos!', err);
    })
  }

  reply(){
    this.router.navigate(['main']);
  }

  // #endregion
}


