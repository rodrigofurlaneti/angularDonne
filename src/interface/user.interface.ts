import { StoreModel } from "src/model/store.model";
import { ProfileModel } from "./profile.interface";

export interface IUserInterface {
    userId: number;
    userName: string;
    userPassword: string;
    store: StoreModel;
    storeName: string;
    storeId: number;
    profile: ProfileModel;
    profileName: string;
    profileId: number;
    status: boolean;
}
export class UserModel implements IUserInterface {
    userId: number = 0;
    userName: string = '';
    userPassword: string = '';
    store: StoreModel = new StoreModel;
    storeName: string = ' ';
    storeId: number = 0;
    profile: ProfileModel = new ProfileModel;
    profileName: string = ' ';
    profileId: number = 0;
    status: boolean = true;
    constructor(){}
  }
