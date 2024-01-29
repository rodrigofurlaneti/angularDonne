import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleTypeModel } from 'src/interface/vehicleType.interface';

@Injectable({
  providedIn: 'root'
})

export class VehicleTypeCreateService {

  private route = 'https://localhost:7027/vehicleType';
  private routeAzure = 'https://apidonne.azurewebsites.net/vehicleType';

  constructor(private http: HttpClient) { }

  save(vehicleType: VehicleTypeModel) : Observable<any>{
    return this.http.post<any>(this.routeAzure, vehicleType)
  }

}
