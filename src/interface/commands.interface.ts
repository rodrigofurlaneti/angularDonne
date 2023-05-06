export interface ICommandsInterface {
    commandsId: number;
    buyerId: number;
    buyerName: string;
    storeId: number;
    storeName: string;
    userId: number;
    userName: string;
    status: boolean;
}
export class CommandsModel implements ICommandsInterface {
    commandsId: number = 0;
    buyerId: number = 0;
    buyerName: string = ' ';
    storeId: number = 0;
    storeName: string = ' ';
    userId: number = 0;
    userName: string = ' ';
    status: boolean = false;
    constructor(){}
  }
