import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryCreateService {

  private route = 'https://localhost:7027/';

  constructor(private http: HttpClient) { }

  save(category: CategoryModel) : Observable<any>{
    return this.http.post<any>(this.route+'Category', category)
  }

}
