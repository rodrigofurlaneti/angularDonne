import { of } from "rxjs";
import { UserCreateService } from "src/app/user/user-create/user-create.service";
import { UserModel } from "src/interface/user.interface";

export class UserCreateMockService extends UserCreateService
{
    response = [
        {
            "UserId": "1",
            "UserName": "Administrador",
            "UserPassword": "123456789",
            "ProfileId": "1",
            "ProfileName": "Perfil",
            "status": "true"
        }
    ];
    
    override save(profile: UserModel)
    { 
        return of(this.response) 
    }
}