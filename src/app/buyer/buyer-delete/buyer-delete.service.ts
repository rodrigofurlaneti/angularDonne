import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerModel } from 'src/interface/buyer.interface';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BuyerDeleteService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.routeAws+'Buyer')
  }

  delete(id:number): Observable<any>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheaders
    };
    return this.http.delete(this.routeAws+'Buyer/'+id, options)
  }
}
