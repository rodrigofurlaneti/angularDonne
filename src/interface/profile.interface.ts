export interface IProfileInterface {
    profileId: number;
    profileName: string;
    dateInsert: Date;
    dateUpdate: Date;
    userId: number;
    userName: string;
}
export class ProfileModel implements IProfileInterface {
    profileId: number = 0;
    profileName: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    userId: number = 0;
    userName: string = '';
    constructor(){}
  }
