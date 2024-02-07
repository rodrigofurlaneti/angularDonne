import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleColorModel } from 'src/interface/vehicleColor.interface';

@Injectable({
  providedIn: 'root'
})

export class VehicleColorUpdateService {

  private route = 'https://localhost:7027/VehicleColor';
  private routeAzure = 'https://apidonne.azurewebsites.net/VehicleColor';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(vehicleColorModel: VehicleColorModel) {
    return this.httpClient.put(`${this.routeAzure}`, vehicleColorModel);
  }
}