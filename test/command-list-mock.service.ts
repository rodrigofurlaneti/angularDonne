import { of } from "rxjs";
import { CommandListService } from "src/app/command/command-list/command-list.service";

export class CommandListMockService extends CommandListService
{
    response = [
            {
                "amount": "1",
                "buyerId": "1",
                "buyerName": "Product",
                "userId": "1",
                "userName": "Product",
                "commandId": "1",
                "salePrice": "29.90",
                "dateInsert": "",
                "dateUpdate": ""
            }
        ];
    
    override list()
    { 
        return of(this.response) 
    }
}