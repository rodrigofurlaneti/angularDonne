import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerModel } from 'src/interface/buyer.interface';

@Injectable({
  providedIn: 'root'
})

export class BuyerUpdateService {

  private route = 'https://localhost:7027/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route+'Buyer');

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.route}Buyer/${id}`);
  }

  public update(buyerModel: BuyerModel) {
    console.log(buyerModel);
    return this.httpClient.put(`${this.route}Buyer`, buyerModel);
  }
}