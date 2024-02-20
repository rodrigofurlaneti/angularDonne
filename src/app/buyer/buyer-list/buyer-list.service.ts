import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerModel } from 'src/interface/buyer.interface';

@Injectable({
  providedIn: 'root'
})
export class BuyerListService {

  private route = 'https://localhost:7027/Buyer';
  private routeAzure = 'https://apidonne.azurewebsites.net/Buyer';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    var ret = this.http.get(this.route);
    return ret;
  }

  listBuyerStatus(id:number) : Observable<any>{
    var ret = this.http.options<any>(this.route+'/'+id); 
    return ret;
  }
}
