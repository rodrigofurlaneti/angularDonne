import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandsModel } from 'src/interface/commands.interface';

@Injectable({
  providedIn: 'root'
})

export class CommandsUpdateService {

  private route = 'https://localhost:7027/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route+'Commands');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.route}Commands/${id}`);
  }

  public update(commandsModel: CommandsModel) {
    return this.httpClient.put(`${this.route}Commands`, commandsModel);
  }
}