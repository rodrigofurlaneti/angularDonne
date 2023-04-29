export interface IBuyerInterface {
    buyerId: string;
    buyerName: string;
    buyerAddress: string;
    buyerPhone: string;
    StoreId: string;
    StoreName: string;
}
export class BuyerModel implements IBuyerInterface {
    buyerId: string = "0";    
    buyerName: string = ''; 
    buyerAddress: string = '';
    buyerPhone: string = " ";
    StoreId: string = "0";
    StoreName: string = '';
    constructor(){}
  }
