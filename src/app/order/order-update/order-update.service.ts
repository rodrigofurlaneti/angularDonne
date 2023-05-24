import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/interface/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderUpdateService {

  private route = 'https://localhost:7027/Order';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.route+'/'+id);
  }

  public update(orderModel: OrderModel) {
    return this.httpClient.put(this.route, orderModel);
  }
}