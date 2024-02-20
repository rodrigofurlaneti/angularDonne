import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductStockInventoryService {

  private route = 'https://localhost:7027/StockInventory';
  private routeAzure = 'https://apidonne.azurewebsites.net/StockInventory';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route)
  }
}
