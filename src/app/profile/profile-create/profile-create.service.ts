import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileCreateService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  save(profile: ProfileModel) : Observable<any>{
    return this.http.post<any>(this.routeAws+'Profile', profile)
  }

}
