import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/interface/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserUpdateService {

  private route = 'https://localhost:7027/User';
  private routeAzure = 'https://apidonne.azurewebsites.net/User';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAzure);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.routeAzure+'/'+id);
  }

  public update(userModel: UserModel) {
    console.log(userModel);
    return this.httpClient.put(this.routeAzure, userModel);
  }
}