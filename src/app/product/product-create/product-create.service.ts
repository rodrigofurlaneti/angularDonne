import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductCreateService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  save(product: ProductModel) : Observable<any>{
    return this.http.post<any>(this.routeAws+'Product', product)
  }

  listCategory() : Observable<any>{
    return this.http.get(this.routeAws+'Category')
  }
}
