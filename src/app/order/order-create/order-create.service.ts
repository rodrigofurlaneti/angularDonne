import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/interface/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderCreateService {

  private route = 'https://localhost:7027/Order';

  constructor(private http: HttpClient) { }

  save(order: OrderModel) : Observable<any>{
    return this.http.post<any>(this.route, order)
  }

}
