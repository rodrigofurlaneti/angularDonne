export interface IProfileInterface {
    profileId: number;
    profileName: string;
    storeId: number;
    storeName: string;
}
export class ProfileModel implements IProfileInterface {
    profileId: number = 0;
    profileName: string = '';
    storeId: number = 0;
    storeName: string = '';
    constructor(){}
  }
