import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';


@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  private routeAws = 'https://localhost:7027/';
  //'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.routeAws+'Profile')
  }
}
