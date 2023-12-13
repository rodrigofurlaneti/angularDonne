import { of } from "rxjs";
import { BuyerCreateService } from "src/app/buyer/buyer-create/buyer-create.service";
import { BuyerModel } from "src/interface/buyer.interface";

export class BuyerCreateMockService extends BuyerCreateService
{
    response = [
        {
            "buyerId": "1",
            "buyerName": "Administrador",
            "buyerPhone": "123456789",
            "buyerAddress": "Rua Teste, 12345, Jardim Teste",
            "dateInsert": "",
            "dateUpdate": "",
            "userId": "1",
            "userName": "Administrador"
        }
    ];
    
    override save(profile: BuyerModel)
    { 
        return of(this.response) 
    }
}