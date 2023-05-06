import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandsModel } from 'src/interface/commands.interface';

@Injectable({
  providedIn: 'root'
})
export class CommandsCreateService {

  private routeAws = 'https://localhost:7027/';
  //'http://ec2-34-236-215-167.compute-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  save(commands: CommandsModel) : Observable<any>{
    return this.http.post<any>(this.routeAws+'Commands', commands)
  }

  listBuyer() : Observable<any>{
    return this.http.get(this.routeAws+'Buyer')
  }
}