import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from 'src/interface/model.inteface';

@Injectable({
  providedIn: 'root'
})
export class ModelCreateService {

  private route = 'https://localhost:7027/model';
  private routeAzure = 'https://apidonne.azurewebsites.net/model';

  constructor(private http: HttpClient) { }

  save(model: Model) : Observable<any>{
    return this.http.post<any>(this.routeAzure, model)
  }

}
