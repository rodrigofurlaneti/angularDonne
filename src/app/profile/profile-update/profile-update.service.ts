import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';

@Injectable({
  providedIn: 'root'
})

export class ProfileUpdateService {

  private routeAws = 'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.routeAws+'Profile');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.routeAws}Profile/${id}`);
  }

  public update(profileModel: ProfileModel) {
    return this.httpClient.put(`${this.routeAws}Profile`, profileModel);
  }
}