import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/interface/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserUpdateService {

  private routeAws = 'https://localhost:7027/';
  //'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'User');

  }

  public listProfile() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Profile');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.routeAws}User/${id}`);
  }

  public update(userModel: UserModel) {
    console.log(userModel);
    return this.httpClient.put(this.routeAws+'User/', userModel);
  }
}