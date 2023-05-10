import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandsModel } from 'src/interface/commands.interface';
import { OrderModel } from 'src/interface/order.interface';

@Injectable({
  providedIn: 'root'
})
export class CommandsCreateService {

  private route = 'https://localhost:7027/';

  constructor(private http: HttpClient) { }

  saveClient(commands: CommandsModel) : Observable<any>{
    return this.http.post<any>(this.route+'Commands', commands)
  }

  saveCommand(order: OrderModel) : Observable<any>{
    return this.http.post<any>(this.route+'Order', order)
  }

  listProducts() : Observable<any>{
    return this.http.get(this.route+'Product')
  }
  
  listBuyer() : Observable<any>{
    return this.http.get(this.route+'Buyer')
  }
}
