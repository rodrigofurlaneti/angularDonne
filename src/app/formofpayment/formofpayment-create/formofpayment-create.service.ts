import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

@Injectable({
  providedIn: 'root'
})
export class FormOfPaymentCreateService {

  private route = 'https://localhost:7027/';
  
  constructor(private http: HttpClient) { }

  save(formOfPaymentModel: FormOfPaymentModel) : Observable<any>{
    return this.http.post<any>(this.route+'FormOfPayment', formOfPaymentModel)
  }
}
