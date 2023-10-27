import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  private route = 'https://localhost:7027/Order';
  private routeAzure = 'https://apidonne.azurewebsites.net/Order';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.routeAzure)
  }
}
