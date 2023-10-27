import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileCreateService {

  private route = 'https://localhost:7027/Profile';
  private routeAzure = 'https://apidonne.azurewebsites.net/Profile';

  constructor(private http: HttpClient) { }

  save(profile: ProfileModel) : Observable<any>{
    return this.http.post<any>(this.routeAzure, profile)
  }

}
