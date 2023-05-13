import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandModel } from 'src/interface/command.interface';

@Injectable({
  providedIn: 'root'
})

export class CommandUpdateService {

  private route = 'https://localhost:7027/';

  constructor(
    private httpClient: HttpClient
  ) {}

  public list() : Observable<any>{
    return this.httpClient.get(this.route+'Command');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.route}Command/${id}`);
  }

  public update(commandModel: CommandModel) {
    return this.httpClient.put(`${this.route}Command`, commandModel);
  }
}