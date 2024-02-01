import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleModel } from 'src/interface/vehicleModel.inteface';

@Injectable({
  providedIn: 'root'
})
export class VehicleModelCreateService {

  private route = 'https://localhost:7027/vehicleModel';
  private routeAzure = 'https://apidonne.azurewebsites.net/vehicleModel';

  constructor(private http: HttpClient) { }

  save(vehicleModel: VehicleModel) : Observable<any>{
    return this.http.post<any>(this.routeAzure, vehicleModel)
  }
}