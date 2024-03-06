import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationUserModel } from 'src/interface/authenticationUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private route = 'https://localhost:7027/Authentication';
  private routeAzure = 'https://apidonne.azurewebsites.net/Authentication';
  private routeIp = 'https://api.ipify.org/?format=json';

  constructor(private http: HttpClient) { }

  public getIPAddress()  
  {  
    return this.http.get(this.routeIp);  
  } 

  appService(authenticationUserModel: AuthenticationUserModel) : Observable<any>{
    return this.http.post<any>(this.route, authenticationUserModel)
  }
}

