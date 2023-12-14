import { of } from "rxjs";
import { ProductListService } from "src/app/product/product-list/product-list.service";

export class ProductListMockService extends ProductListService
{
    response = [
            {
                "categoryId": "1",
                "categoryName": "Administrador",
                "costPrice": "10.99",
                "minimumStockQuantity": "20",
                "needToPrint": "true",
                "productId": "1",
                "productName": "Produto",
                "quantityStock": "10",
                "quantityBuy": "10",
                "salePrice": "",
                "dateInsert": "",
                "dateUpdate": ""
            }
        ];
    
    override list()
    { 
        return of(this.response) 
    }
}