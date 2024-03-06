import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormOfPaymentListService {

  private route = 'https://localhost:7027/FormOfPayment';
  private routeAzure = 'https://apidonne.azurewebsites.net/FormOfPayment';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route)
  }
}
