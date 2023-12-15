import { of } from "rxjs";
import { OrderListService } from "src/app/order/order-list/order-list.service";

export class OrderListMockService extends OrderListService
{
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
    
    override list()
    { 
        return of(this.response) 
    }
}