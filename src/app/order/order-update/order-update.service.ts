import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/interface/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderUpdateService {

  private route = 'https://localhost:7027/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route+'Order');

  }

  public listBuyer() : Observable<any>{
    return this.httpClient.get(this.route+'Buyer');
  }

  public listProducts() : Observable<any>{
    return this.httpClient.get(this.route+'Product');
  }

  public getById(id: number): Observable<any> {
    console.log(id);
    return this.httpClient.get<any>(`${this.route}Order/${id}`);
  }

  public update(orderModel: OrderModel) {
    console.log(orderModel);
    return this.httpClient.put(this.route+'Order/', orderModel);
  }
}