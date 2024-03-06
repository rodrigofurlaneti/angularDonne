import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandSearchService {

  private route = 'https://localhost:7027/Command';
  private routeAzure = 'https://apidonne.azurewebsites.net/Command';
  private routeList = 'https://localhost:7027/CommandOrder';
  private routeListAzure = 'https://apidonne.azurewebsites.net/CommandOrder';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route)
  }
  
  listCommandOrdersByIdNumber(id: number) : Observable<any>{
    return this.http.get(this.routeList+'/'+id);
  }
}
