import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyAssetModel } from 'src/interface/companyAsset.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyAssetCreateService {

  private route = 'https://localhost:7027/CompanyAsset';
  private routeAzure = 'https://apidonne.azurewebsites.net/CompanyAsset';

  constructor(private http: HttpClient) { }

  save(companyAsset: CompanyAssetModel) : Observable<any>{
    return this.http.post<any>(this.route, companyAsset)
  }
}
