export interface ICommandInterface {
    commandId: number
    buyerId: number;
    buyerName: string;
    dateInsert: Date;
    dateUpdate: Date;
    userId: number;
    userName: string;
    status: boolean;
}
export class CommandModel implements ICommandInterface {
    commandId: number = 0;
    buyerId: number = 0;
    buyerName: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    userId: number = 0;
    userName: string = '';
    status: boolean = false;
    constructor(){}
  }
