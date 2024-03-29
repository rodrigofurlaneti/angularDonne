import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  private route = 'https://localhost:7027/Category';
  private routeAzure = 'https://apidonne.azurewebsites.net/Category';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route)
  }
}
