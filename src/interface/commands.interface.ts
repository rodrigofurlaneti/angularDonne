export interface ICommandsInterface {
    buyerId: number;
    buyerName: string;
    userId: number;
    userName: string;
    status: boolean;
}
export class CommandsModel implements ICommandsInterface {
    buyerId: number = 0;
    buyerName: string = '';
    userId: number = 0;
    userName: string = '';
    status: boolean = false;
    constructor(){}
  }
