import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleModelListService {

  private route = 'https://localhost:7027/VehicleModel';
  private routeAzure = 'https://apidonne.azurewebsites.net/vehicleModel';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    let ret = this.http.get(this.routeAzure);
    return ret;
  }
}
