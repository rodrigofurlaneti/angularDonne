import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/interface/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserCreateService {

  private routeAws = 'https://localhost:7027/';
  //'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  save(user: UserModel) : Observable<any>{
    return this.http.post<any>(this.routeAws+'User', user)
  }

  listProfile() : Observable<any>{
    return this.http.get(this.routeAws+'Profile')
  }

  listStore() : Observable<any>{
    return this.http.get(this.routeAws+'Store')
  }

}
