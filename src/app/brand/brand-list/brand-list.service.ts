import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandModel } from 'src/interface/brand.interface';

@Injectable({
  providedIn: 'root'
})
export class BrandListService {

  private route = 'https://localhost:7027/brand';
  private routeAzure = 'https://apidonne.azurewebsites.net/brand';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    var ret = this.http.get(this.routeAzure);
    return ret;
  }

  listBrandStatus(id:number) : Observable<any>{
    var ret = this.http.options<any>(this.routeAzure+'/'+id); 
    return ret;
  }
}
