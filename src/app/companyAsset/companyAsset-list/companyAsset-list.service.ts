import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyAssetListService {

  private route = 'https://localhost:7027/CompanyAsset';
  private routeAzure = 'https://apidonne.azurewebsites.net/CompanyAsset';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route)
  }
}
