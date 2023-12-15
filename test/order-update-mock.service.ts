import { of } from "rxjs";
import { OrderUpdateService } from "src/app/order/order-update/order-update.service";
import { OrderModel } from "src/interface/order.interface";

export class OrderUpdateMockService extends OrderUpdateService
{
    obj: OrderModel = new OrderModel();
    
    response = [
        {
            "amount": 1,
            "buyerName": 'Administrador',
            "commandId": 1,
            "orderId": 1,
            "productId": 1,
            "productName": "Produto",
            "salePrice": "20.00",
            "totalSalePrice": "20.00",
            "userId": 1,
            "userName": "Administrador"
        }
    ];
    
    override getById(id: number)
    { 
        return of(this.response) 
    }
}