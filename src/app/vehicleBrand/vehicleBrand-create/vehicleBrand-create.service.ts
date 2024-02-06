import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleBrand } from 'src/interface/vehicleBrand.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleBrandCreateService {

  private route = 'https://localhost:7027/VehicleBrand';
  private routeAzure = 'https://apidonne.azurewebsites.net/VehicleBrand';

  constructor(private http: HttpClient) { }

  save(VehicleBrand: VehicleBrand) : Observable<any>{
    return this.http.post<any>(this.routeAzure, VehicleBrand)
  }
}