import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentModel } from 'src/interface/payment.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentCreateService {

  private route = 'https://localhost:7027/Payment';

  constructor(private http: HttpClient) { }

  save(payment: PaymentModel) : Observable<any>{
    return this.http.post<any>(this.route, payment)
  }

}
