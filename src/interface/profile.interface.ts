export interface IProfileInterface {
    profileId: number;
    profileName: string;
}
export class ProfileModel implements IProfileInterface {
    profileId: number = 0;
    profileName: string = '';
    constructor(){}
  }
