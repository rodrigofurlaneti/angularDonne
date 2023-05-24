import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandSearchService {

  private route = 'https://localhost:7027/Command';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route)
  }
  
  listCommandOrdersByIdNumber(id: number) : Observable<any>{
    let url = this.route+'/'+id;
    const body = {};
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };
    return this.http.patch<any>(url, body, options);
  }
}
