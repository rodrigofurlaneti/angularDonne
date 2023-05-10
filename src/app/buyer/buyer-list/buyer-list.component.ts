import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { BuyerListService } from './buyer-list.service';
import { BuyerModel } from 'src/interface/buyer.interface';

let ELEMENT_DATA: BuyerModel[];

@Component({
  selector: 'buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'phone'];

  constructor(private buyerListService: BuyerListService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.buyerListService.list().subscribe(list => {
      ELEMENT_DATA = list;
      this.dataSource = ELEMENT_DATA;
    }, err => {
      console.log('Erro ao listar os clientes', err);
    })
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<BuyerModel>();

  reply(){
    this.router.navigate(['main']);
  }
}


