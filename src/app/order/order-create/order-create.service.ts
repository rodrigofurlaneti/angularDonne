import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/interface/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderCreateService {

  private routeAws = 'https://localhost:7027/';
  //'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  save(order: OrderModel) : Observable<any>{
    return this.http.post<any>(this.routeAws+'Order', order)
  }

  listProducts() : Observable<any>{
    return this.http.get(this.routeAws+'Product')
  }

  listBuyer() : Observable<any>{
    return this.http.get(this.routeAws+'Buyer')
  }

}
