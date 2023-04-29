import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';

@Injectable({
  providedIn: 'root'
})

export class FormOfPaymentUpdateService {
  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'FormOfPayment');

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.routeAws}FormOfPayment/${id}`);
  }

  public update(formOfPaymentModel: FormOfPaymentModel) {
    return this.httpClient.put(`${this.routeAws}FormOfPayment`, formOfPaymentModel);
  }
}