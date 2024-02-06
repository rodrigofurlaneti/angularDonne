import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleBrand } from 'src/interface/vehicleBrand.interface';

@Injectable({
  providedIn: 'root'
})

export class VehicleBrandUpdateService {

  private route = 'https://localhost:7027/VehicleBrand';
  private routeAzure = 'https://apidonne.azurewebsites.net/VehicleBrand';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(vehicleBrand: VehicleBrand) {
    return this.httpClient.put(`${this.routeAzure}`, vehicleBrand);
  }
}