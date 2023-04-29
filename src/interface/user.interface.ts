import { StoreModel } from "src/model/store.model";
import { ProfileModel } from "./profile.interface";

export interface IUserInterface {
    userId: number;
    userName: string;
    userPassword: string;
    store: StoreModel;
    profile: ProfileModel;
    status: boolean;
}
export class UserModel implements IUserInterface {
    userId: number = 0;
    userName: string = '';
    userPassword: string = '';
    store: StoreModel = new StoreModel;
    profile: ProfileModel = new ProfileModel;
    status: boolean = true;
    constructor(){}
  }
