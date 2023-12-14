import { of } from "rxjs";
import { ProductUpdateService } from "src/app/product/product-update/product-update.service";
import { ProductModel } from "src/interface/product.interface";

export class ProductUpdateMockService extends ProductUpdateService
{
    obj: ProductModel = new ProductModel();
    
    response = [
        {
            "productId": 1,
            "productName": "Produto",
            "categoryId": "1",
            "categoryName": "Categoria",
            "costPrice": "10.00",
            "salePrice": "20.00",
            "quantityStock": 10,
            "minimumStockQuantity": 5,
            "totalValueCostOfInventory": "100.00",
            "totalValueSaleStock": "200.00",
            "dateInsert": "",
            "dateUpdate": "",
            "needToPrint": true,
            "userId": 1,
            "userName": "Administrador",
            "status": true,
            "quantityToBuy": 5,
            "totalValueOfLastPurchase": "50.00"
        }
    ];
    
    override getById(id: number)
    { 
        return of(this.response) 
    }
}