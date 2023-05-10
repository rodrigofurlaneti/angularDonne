import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/interface/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private route = 'https://localhost:7027/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route+'Product')
  }
}
