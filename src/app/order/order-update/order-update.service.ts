import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/interface/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderUpdateService {

  private route = 'https://localhost:7027/Order';
  private routeAzure = 'https://apidonne.azurewebsites.net/Order';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(orderModel: OrderModel) {
    return this.httpClient.put(this.routeAzure, orderModel);
  }
}