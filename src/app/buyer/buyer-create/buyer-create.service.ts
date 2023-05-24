import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerModel } from 'src/interface/buyer.interface';

@Injectable({
  providedIn: 'root'
})
export class BuyerCreateService {

  private route = 'https://localhost:7027/Buyer';

  constructor(private http: HttpClient) { }

  save(buyer: BuyerModel) : Observable<any>{
    return this.http.post<any>(this.route, buyer)
  }

}
