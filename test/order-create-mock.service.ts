import { of } from "rxjs";
import { OrderCreateService } from "src/app/order/order-create/order-create.service";
import { OrderModel } from "src/interface/order.interface";

export class OrderCreateMockService extends OrderCreateService
{
    response = [
        {
            "amount": 1,
            "buyerName": "Produto",
            "commandId": 1,
            "orderId": 1,
            "productId": 1,
            "productName": "Produto",
            "salePrice": "20.00",
            "totalSalePrice":  "20.00",
            "userId": 1,
            "userName": "Administrador"
        }
    ];
    
    override save(Order: OrderModel)
    { 
        return of(this.response) 
    }
}