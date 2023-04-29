import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreIdService {
  constructor() {
    this.storeId = '';
  }

  storeId: string;

  setStoreId(id: string) {
    this.storeId = id;
  }
}