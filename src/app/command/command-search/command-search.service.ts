import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandSearchService {

  private route = 'https://localhost:7027/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route+'Command')
  }
  
  listCommandOrdersByIdNumber(id: number) : Observable<any>{
    return this.http.get<any>(`${this.route}CommandOrder/${id}`);
  }
}
