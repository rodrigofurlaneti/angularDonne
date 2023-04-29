import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormofpaymentModel } from 'src/interface/formofpayment.interface';

@Injectable({
  providedIn: 'root'
})

export class FormofpaymentUpdateService {
  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Formofpayment');

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.routeAws}Formofpayment/${id}`);
  }

  public update(formofpaymentModel: FormofpaymentModel) {
    console.log(formofpaymentModel);
    return this.httpClient.put(`${this.routeAws}Formofpayment`, formofpaymentModel);
  }

  listCategory() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Category')
  }
}