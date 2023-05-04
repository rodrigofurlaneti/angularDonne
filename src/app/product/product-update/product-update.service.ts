import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/interface/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductUpdateService {
  private routeAws = 'https://localhost:7027/';
  //'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Product');

  }

  public getById(id: number): Observable<any> {
    console.log(" identificação do GetByID: " + id);
    return this.httpClient.get<any>(`${this.routeAws}Product/${id}`);
  }

  public update(productModel: ProductModel) {
    console.log(productModel);
    return this.httpClient.put(`${this.routeAws}Product`, productModel);
  }

  listCategory() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Category')
  }
}