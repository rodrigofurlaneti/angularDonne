import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerModel } from 'src/interface/buyer.interface';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BuyerDeleteService {

  private route = 'https://localhost:7027/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route+'Buyer')
  }

  delete(id:number): Observable<any>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheaders
    };
    return this.http.delete(this.route+'Buyer/'+id, options)
  }
}
