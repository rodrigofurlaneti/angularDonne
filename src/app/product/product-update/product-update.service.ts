import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/interface/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductUpdateService {
  private route = 'https://localhost:7027/Product';
  private routeAzure = 'https://apidonne.azurewebsites.net/Product';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.route+'/'+id);
  }

  public update(productModel: ProductModel) {
    return this.httpClient.put(this.routeAzure, productModel);
  }
}