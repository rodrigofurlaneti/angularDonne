import { of } from "rxjs";
import { ProfileDeleteService } from "src/app/profile/profile-delete/profile-delete.service";
import { ProfileModel } from "src/interface/profile.interface";

export class ProfileDeleteMockService extends ProfileDeleteService
{
    response = [
        {
            "profileId": "1",
            "profileName": "Administrador",
            "dateInsert": "",
            "dateUpdate": "",
            "userId": "1",
            "userName": "Administrador"
        }
    ];
    
    override list()
    { 
        return of(this.response) 
    }

    override delete()
    { 
        return of(this.response) 
    }
}