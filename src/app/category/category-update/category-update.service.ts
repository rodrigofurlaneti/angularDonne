import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/interface/category.interface';

@Injectable({
  providedIn: 'root'
})

export class CategoryUpdateService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Category');

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.routeAws}Category/${id}`);
  }

  public update(categoryModel: CategoryModel) {
    console.log(categoryModel);
    return this.httpClient.put(`${this.routeAws}Category`, categoryModel);
  }
}