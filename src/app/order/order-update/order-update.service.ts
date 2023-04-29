import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/interface/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderUpdateService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Order');

  }

  public listBuyer() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Buyer');
  }

  public listProducts() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Product');
  }

  public getById(id: number): Observable<any> {
    console.log(id);
    return this.httpClient.get<any>(`${this.routeAws}Order/${id}`);
  }

  public update(orderModel: OrderModel) {
    return this.httpClient.put(this.routeAws+'Order/', orderModel);
  }
}