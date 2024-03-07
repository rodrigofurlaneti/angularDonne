import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleBrandListService {

  private route = 'https://localhost:7027/VehicleBrand';
  private routeAzure = 'https://apidonne.azurewebsites.net/VehicleBrand';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    let ret = this.http.get(this.routeAzure);
    return ret;
  }

  listBrandStatus(id:number) : Observable<any>{
    let ret = this.http.options<any>(this.routeAzure+'/'+id); 
    return ret;
  }
}
