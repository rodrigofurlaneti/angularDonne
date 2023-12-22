import { of } from "rxjs";
import { CategoryListService } from "src/app/category/category-list/category-list.service";

export class CategoryListMockService extends CategoryListService
{
    response = [
        {
            "categoryId": "1",
            "categoryName": "Administrador",
            "dateInsert": "",
            "dateUpdate": "",
            "userId": "1",
            "userName": "Administrador"
        }
    ];
    
    override list()
    { 
        return of(this.response) 
    }
}