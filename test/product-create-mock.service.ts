import { of } from "rxjs";
import { ProductCreateService } from "src/app/product/product-create/product-create.service";
import { ProductModel } from "src/interface/product.interface";

export class ProductCreateMockService extends ProductCreateService
{
    response = [
        {
            "commandId": 1,
            "ProductId": 1,
            "formOfProductId": 1,
            "formOfProductName": "Forma de pagamento",
            "ProductAmount": "20.00",
            "ProductType":  "Tipo de pagamento",
            "userId": 1,
            "userName": "Administrador"
        }
    ];
    
    override save(Product: ProductModel)
    { 
        return of(this.response) 
    }
}