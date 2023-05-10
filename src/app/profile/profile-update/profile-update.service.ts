import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';

@Injectable({
  providedIn: 'root'
})

export class ProfileUpdateService {

  private route = 'https://localhost:7027/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route+'Profile');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.route}Profile/${id}`);
  }

  public update(profileModel: ProfileModel) {
    return this.httpClient.put(`${this.route}Profile`, profileModel);
  }
}