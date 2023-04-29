import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreModel } from 'src/interface/store.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreCreateService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  save(store: StoreModel) : Observable<any>{
    return this.http.post<any>(this.routeAws+'/Store', store)
  }

}
