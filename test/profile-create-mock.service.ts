import { of } from "rxjs";
import { ProfileCreateService } from "src/app/profile/profile-create/profile-create.service";
import { ProfileModel } from "src/interface/profile.interface";

export class ProfileCreateMockService extends ProfileCreateService
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
    
    override save(profile: ProfileModel)
    { 
        return of(this.response) 
    }
}