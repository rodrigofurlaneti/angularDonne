export interface IOrderInterface {
    orderId: number;
    commandId: number;
    buyerName: string;
    productId: number;
    productName: string;
    amount: number;
    userId: number;
    userName: string;
    dateInsert: Date;
    dateUpdate: Date;
}
export class OrderModel implements IOrderInterface {
    orderId: number = 0;    
    commandId: number = 0;
    buyerName: string = ""; 
    productId: number = 0;
    productName: string = "";
    amount: number = 0;
    userId: number = 0;
    userName: string = "";
    dateInsert: Date = new Date;
    dateUpdate: Date = new Date;
    constructor(){}
  }
