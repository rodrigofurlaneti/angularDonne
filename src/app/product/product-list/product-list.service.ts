import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/interface/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.routeAws+'Product')
  }
}
