import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/interface/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductUpdateService {
  private route = 'https://localhost:7027/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route+'Product');

  }

  public getById(id: number): Observable<any> {
    console.log(" identificação do GetByID: " + id);
    return this.httpClient.get<any>(`${this.route}Product/${id}`);
  }

  public update(productModel: ProductModel) {
    console.log(productModel);
    return this.httpClient.put(`${this.route}Product`, productModel);
  }

  listCategory() : Observable<any>{
    return this.httpClient.get(this.route+'Category')
  }
}