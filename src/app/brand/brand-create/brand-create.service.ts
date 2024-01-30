import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandModel } from 'src/interface/brand.interface';

@Injectable({
  providedIn: 'root'
})

export class BrandCreateService {

  private route = 'https://localhost:7027/brand';
  private routeAzure = 'https://apidonne.azurewebsites.net/brand';

  constructor(private http: HttpClient) { }

  save(brand: BrandModel) : Observable<any>{
    return this.http.post<any>(this.routeAzure, brand)
  }

}
