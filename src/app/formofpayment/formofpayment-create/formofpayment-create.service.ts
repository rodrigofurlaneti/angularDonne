import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

@Injectable({
  providedIn: 'root'
})
export class FormOfPaymentCreateService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  save(formOfPaymentModel: FormOfPaymentModel) : Observable<any>{
    return this.http.post<any>(this.routeAws+'FormOfPayment', formOfPaymentModel)
  }
}
