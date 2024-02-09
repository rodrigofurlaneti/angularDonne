import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleListService {

  private route = 'https://localhost:7027/Vehicle';
  private routeAzure = 'https://apidonne.azurewebsites.net/Vehicle';

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
