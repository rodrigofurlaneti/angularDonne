import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryCreateService {

  private routeAws = 'https://localhost:7027/';
  //'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  save(category: CategoryModel) : Observable<any>{
    return this.http.post<any>(this.routeAws+'Category', category)
  }

}
