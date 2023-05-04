import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreModel } from 'src/interface/store.interface';

@Injectable({
  providedIn: 'root'
})

export class StoreUpdateService {

  private routeAws = 'https://localhost:7027/';
  //'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Store');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.routeAws}Store/${id}`);
  }

  public update(storeModel: StoreModel) {
    return this.httpClient.put(`${this.routeAws}Store`, storeModel);
  }
}