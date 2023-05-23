import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

@Injectable({
  providedIn: 'root'
})
export class FormOfPaymentCreateService {

  private route = 'https://localhost:7027/FormOfPayment';
  
  constructor(private http: HttpClient) { }

  save(formOfPayment: FormOfPaymentModel) : Observable<any>{
    return this.http.post<any>(this.route, formOfPayment)
  }
}
