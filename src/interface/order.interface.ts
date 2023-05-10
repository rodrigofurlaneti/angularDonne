export interface IOrderInterface {
    orderId: number;
    clientId: number;
    clientName: string;
    productId: number;
    productName: string;
    amount: number;
    storeName: string;
    storeId: number;
    userId: number;
    userName: string;
    dateInsert: Date;
    dateUpdate: Date;
    commandId: number;
}
export class OrderModel implements IOrderInterface {
    orderId: number = 0;    
    clientId: number = 0; 
    clientName: string = '';
    productId: number = 0;
    productName: string = " ";
    amount: number = 0;
    storeName: string = " ";
    storeId: number = 0;
    userId: number = 0;
    userName: string = " ";
    dateInsert: Date = new Date;
    dateUpdate: Date = new Date;
    commandId: number = 0;
    constructor(){}
  }
