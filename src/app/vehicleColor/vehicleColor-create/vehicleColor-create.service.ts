import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleColor } from 'src/interface/vehicleColor.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleColorCreateService {

  private route = 'https://localhost:7027/Color';
  private routeAzure = 'https://apidonne.azurewebsites.net/Color';

  constructor(private http: HttpClient) { }

  save(VehicleColor: VehicleColor) : Observable<any>{
    return this.http.post<any>(this.routeAzure, VehicleColor)
  }
}