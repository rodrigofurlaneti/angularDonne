import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreModel } from 'src/interface/store.interface';


@Injectable({
  providedIn: 'root'
})
export class StoreListService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.routeAws+'Store')
  }
}
