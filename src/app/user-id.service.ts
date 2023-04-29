import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {

  constructor() {
    this.userID = '';
  }

  userID: string;

  setUserId(id: string) {
    this.userID = id;
  }
}
