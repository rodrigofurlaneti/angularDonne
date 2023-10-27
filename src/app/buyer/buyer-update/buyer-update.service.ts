import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerModel } from 'src/interface/buyer.interface';

@Injectable({
  providedIn: 'root'
})

export class BuyerUpdateService {

  private route = 'https://localhost:7027/Buyer';
  private routeAzure = 'https://apidonne.azurewebsites.net/Buyer';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(buyerModel: BuyerModel) {
    return this.httpClient.put(`${this.routeAzure}`, buyerModel);
  }
}