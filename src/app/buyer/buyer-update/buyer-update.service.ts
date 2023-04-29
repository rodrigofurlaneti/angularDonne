import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerModel } from 'src/interface/buyer.interface';

@Injectable({
  providedIn: 'root'
})

export class BuyerUpdateService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Buyer');

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.routeAws}Buyer/${id}`);
  }

  public update(buyerModel: BuyerModel) {
    console.log(buyerModel);
    return this.httpClient.put(`${this.routeAws}Buyer`, buyerModel);
  }
}