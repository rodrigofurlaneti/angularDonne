export interface IStoreInterface {
    storeId: number;
    storeName: string;
    storeCnpj: string;
    storeAddress: string;
    status: boolean;
}

export class StoreModel implements IStoreInterface {
    storeId: number = 0;
    storeName: string = '';
    storeCnpj: string = '';
    storeAddress: string = '';
    status: boolean = true;
    constructor(){}
  }
