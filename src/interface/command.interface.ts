export interface ICommandInterface {
    commandId: number
    buyerId: number;
    buyerName: string;
    amount: number;
    dateInsert: Date;
    dateUpdate: Date;
    userId: number;
    userName: string;
}
export class CommandModel implements ICommandInterface {
    commandId: number = 0;
    buyerId: number = 0;
    buyerName: string = '';
    amount: number = 0;
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    userId: number = 0;
    userName: string = '';
  }
