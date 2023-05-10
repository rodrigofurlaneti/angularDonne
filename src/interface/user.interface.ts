export interface IUserInterface {
    userId: number;
    userName: string;
    userPassword: string;
    profileId: number;
    profileName: string;
    status: boolean;
}
export class UserModel implements IUserInterface {
    userId: number = 0;
    userName: string = '';
    userPassword: string = '';
    profileId: number = 0;
    profileName: string = ' ';
    status: boolean = true;
    constructor(){}
  }
