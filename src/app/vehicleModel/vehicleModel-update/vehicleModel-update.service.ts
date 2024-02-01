import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleModel } from 'src/interface/vehicleModel.inteface';

@Injectable({
  providedIn: 'root'
})

export class VehicleModelUpdateService {

  private route = 'https://localhost:7027/vehicleModel';
  private routeAzure = 'https://apidonne.azurewebsites.net/vehicleModel';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(vehicleModel: VehicleModel) {
    return this.httpClient.put(`${this.routeAzure}`, vehicleModel);
  }
}