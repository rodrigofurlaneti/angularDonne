import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandModel } from 'src/interface/brand.interface';

@Injectable({
  providedIn: 'root'
})

export class BrandUpdateService {

  private route = 'https://localhost:7027/brand';
  private routeAzure = 'https://apidonne.azurewebsites.net/brand';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(BrandModel: BrandModel) {
    return this.httpClient.put(`${this.routeAzure}`, BrandModel);
  }
}