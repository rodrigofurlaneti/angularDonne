import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandModel } from 'src/interface/command.interface';

@Injectable({
  providedIn: 'root'
})
export class CommandCreateService {

  private route = 'https://localhost:7027/Command';
  private routeAzure = 'https://apidonne.azurewebsites.net/Command';

  constructor(private http: HttpClient) { }

  saveClient(command: CommandModel) : Observable<any>{
    return this.http.post<any>(this.route, command)
  }

  listCommand() : Observable<any>{
    return this.http.get(this.route)
  }
}
