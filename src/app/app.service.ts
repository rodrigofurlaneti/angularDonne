import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/interface/user.interface';
import { AuthenticationUserModel } from 'src/interface/authenticationUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private route = 'https://localhost:7027/Authentication';
  private routeAzure = 'https://apidonne.azurewebsites.net/Authentication';

  constructor(private http: HttpClient) { }

  public getIPAddress()  
  {  
    return this.http.get("http://api.ipify.org/?format=json");  
  } 

  appService(authenticationUserModel: AuthenticationUserModel) : Observable<any>{
    return this.http.post<any>(this.route, authenticationUserModel)
  }
}

