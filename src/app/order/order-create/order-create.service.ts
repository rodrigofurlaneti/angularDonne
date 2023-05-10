import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/interface/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderCreateService {

  private route = 'https://localhost:7027/';

  constructor(private http: HttpClient) { }

  save(order: OrderModel) : Observable<any>{
    return this.http.post<any>(this.route+'Order', order)
  }

  listProducts() : Observable<any>{
    return this.http.get(this.route+'Product')
  }

  listBuyer() : Observable<any>{
    return this.http.get(this.route+'Buyer')
  }

}
