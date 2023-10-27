import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerListService {

  private route = 'https://localhost:7027/Buyer';
  private routeAzure = 'https://apidonne.azurewebsites.net/Buyer';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.routeAzure)
  }

  listBuyerStatus(id:number) : Observable<any>{
    return this.http.options<any>(this.routeAzure+'/'+id);
  }
}
