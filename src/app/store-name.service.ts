import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreNameService {

  constructor() {
    this.storeName = '';
  }

  storeName: string;

  setStoreName(name: string) {
    this.storeName = name;
  }
}
