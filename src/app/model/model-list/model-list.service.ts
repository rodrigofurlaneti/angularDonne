import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelListService {

  private route = 'https://localhost:7027/model';
  private routeAzure = 'https://apidonne.azurewebsites.net/model';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    var ret = this.http.get(this.routeAzure);
    return ret;
  }

  listModelStatus(id:number) : Observable<any>{
    var ret = this.http.options<any>(this.routeAzure+'/'+id); 
    return ret;
  }
}
