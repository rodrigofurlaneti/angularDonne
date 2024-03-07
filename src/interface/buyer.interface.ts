export interface IBuyerInterface {
    buyerId: string;
    buyerName: string;
    buyerAddress: string;
    buyerPhone: string;
    dateInsert: Date;
    dateUpdate: Date;
    userId: number;
    userName: string;
    status: number;
}
export class BuyerModel implements IBuyerInterface {
    buyerId: string = "0";    
    buyerName: string = ''; 
    buyerAddress: string = '';
    buyerPhone: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    userId: number = 0;
    userName: string = '';
    status: number = 0;
  }
