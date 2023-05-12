import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandsDeleteService {

  private route = 'https://localhost:7027/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route+'Commands')
  }

  delete(id:number): Observable<any>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheaders
    };
    console.log("id:" + id + "header:" + options);
    return this.http.delete(this.route+'Commands/'+id, options)
  }
}
