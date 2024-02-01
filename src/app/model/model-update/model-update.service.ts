import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from 'src/interface/model.inteface';

@Injectable({
  providedIn: 'root'
})

export class ModelUpdateService {

  private route = 'https://localhost:7027/Model';
  private routeAzure = 'https://apidonne.azurewebsites.net/Model';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(model: Model) {
    return this.httpClient.put(`${this.routeAzure}`, model);
  }
}