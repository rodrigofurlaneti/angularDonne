import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProfileDeleteService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.routeAws+'Profile')
  }

  delete(id:number): Observable<any>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete(this.routeAws+'Profile/'+id, options)
  }
}