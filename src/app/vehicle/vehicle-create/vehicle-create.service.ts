import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleModel } from 'src/interface/vehicle.interface';

@Injectable({
  providedIn: 'root'
})

export class VehicleCreateService {

  private route = 'https://localhost:7027/Vehicle';
  private routeAzure = 'https://apidonne.azurewebsites.net/Vehicle';

  constructor(private http: HttpClient) { }

  save(vehicleModel: VehicleModel) : Observable<any>{
    return this.http.post<any>(this.routeAzure, vehicleModel)
  }

  list() : Observable<any>{
    var ret = this.http.get(this.routeAzure);
    return ret;
  }

}
