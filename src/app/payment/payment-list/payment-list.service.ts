import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentListService {

  private route = 'https://localhost:7027/Payment';
  private routeAzure = 'https://apidonne.azurewebsites.net/Payment';
  
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.routeAzure)
  }
}
