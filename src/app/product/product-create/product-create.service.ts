import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductCreateService {

  private route = 'https://localhost:7027/Product';

  constructor(private http: HttpClient) { }

  save(product: ProductModel) : Observable<any>{
    return this.http.post<any>(this.route, product)
  }

}
