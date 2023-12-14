import { of } from "rxjs";
import { OrderCreateService } from "src/app/order/order-create/order-create.service";
import { OrderModel } from "src/interface/order.interface";

export class OrderCreateMockService extends OrderCreateService
{
    response = [
        {
            "orderId": "1",
            "orderName": "Administrador",
            "dateInsert": "",
            "dateUpdate": "",
            "userId": "1",
            "userName": "Administrador"
        }
    ];
    
    override save(Order: OrderModel)
    { 
        return of(this.response) 
    }
}