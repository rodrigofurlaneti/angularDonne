import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

@Injectable({
  providedIn: 'root'
})

export class FormOfPaymentUpdateService {

  private route = 'https://localhost:7027/FormOfPayment';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.route+'/'+id);
  }

  public update(formOfPaymentModel: FormOfPaymentModel) {
    return this.httpClient.put(this.route, formOfPaymentModel);
  }
}