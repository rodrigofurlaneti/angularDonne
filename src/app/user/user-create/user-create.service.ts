import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/interface/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserCreateService {

  private route = 'https://localhost:7027/User';
  private routeAzure = 'https://apidonne.azurewebsites.net/User';

  constructor(private http: HttpClient) { }

  save(user: UserModel) : Observable<any>{
    return this.http.post<any>(this.routeAzure, user)
  }

}
