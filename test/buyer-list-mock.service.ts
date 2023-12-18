import { of } from "rxjs";
import { BuyerListService } from "src/app/buyer/buyer-list/buyer-list.service";

export class BuyerListMockService extends BuyerListService
{
    response = [
            {
                "buyerAddress": "Rua Teste, 12345",
                "buyerId": "1",
                "buyerName": "Administrador",
                "buyerPhone": "11995882409",
                "userId": 1,
                "userName": "Administrador"
            }
        ];
    
    override list()
    { 
        return of(this.response) 
    }
}