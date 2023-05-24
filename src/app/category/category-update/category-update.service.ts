import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/interface/category.interface';

@Injectable({
  providedIn: 'root'
})

export class CategoryUpdateService {

  private route = 'https://localhost:7027/Category';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.route+'/'+id);
  }

  public update(categoryModel: CategoryModel) {
    return this.httpClient.put(this.route, categoryModel);
  }
}