import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  constructor() {
    this.userName = '';
  }

  userName: string;

  setUserName(name: string) {
    this.userName = name;
  }
}
