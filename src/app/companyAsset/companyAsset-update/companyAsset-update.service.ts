import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyAssetModel } from 'src/interface/companyAsset.interface';

@Injectable({
  providedIn: 'root'
})

export class CompanyAssetUpdateService {

  private route = 'https://localhost:7027/CompanyAsset';
  private routeAzure = 'https://apidonne.azurewebsites.net/CompanyAsset';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.route+'/'+id);
  }

  public update(companyAssetModel: CompanyAssetModel) {
    return this.httpClient.put(this.route, companyAssetModel);
  }
}