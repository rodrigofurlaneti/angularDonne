export interface ICommandOrderInterface {
    commandId: number
    buyerId: number;
    buyerName: string;
    productId: number;
    productName: string;
    amount: number;
    salePrice: string;
}
export class CommandOrderModel implements ICommandOrderInterface {
    commandId: number = 0;
    buyerId: number = 0;
    buyerName: string = '';
    productId: number = 0;
    productName: string = '';
    amount: number = 0;
    salePrice: string = '';
    constructor(){}
  }
