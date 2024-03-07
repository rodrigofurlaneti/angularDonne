import { of } from "rxjs";
import { ProfileListService } from "src/app/profile/profile-list/profile-list.service";

export class ProfileListMockService extends ProfileListService
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
}