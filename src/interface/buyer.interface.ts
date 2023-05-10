export interface IBuyerInterface {
    buyerId: string;
    buyerName: string;
    buyerAddress: string;
    buyerPhone: string;
}
export class BuyerModel implements IBuyerInterface {
    buyerId: string = "0";    
    buyerName: string = ''; 
    buyerAddress: string = '';
    buyerPhone: string = " ";
    constructor(){}
  }
