import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleTypeModel } from 'src/interface/vehicleType.interface';

@Injectable({
  providedIn: 'root'
})

export class VehicleTypeUpdateService {

  private route = 'https://localhost:7027/vehicleType';
  private routeAzure = 'https://apidonne.azurewebsites.net/vehicleType';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(vehicleTypeModel: VehicleTypeModel) {
    return this.httpClient.put(`${this.routeAzure}`, vehicleTypeModel);
  }
}