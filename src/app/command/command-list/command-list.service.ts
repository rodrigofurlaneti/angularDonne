import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandListService {

  private route = 'https://localhost:7027/Command';

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get(this.route)
  }

  listCommandStatus(id: number) : Observable<any>{
    return this.http.options<any>(this.route+'/'+id)
  }
}
