import { of } from "rxjs";
import { CategoryCreateService } from "src/app/category/category-create/category-create.service";
import { CategoryModel } from "src/interface/category.interface";

export class CategoryCreateMockService extends CategoryCreateService
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
    
    override save(profile: CategoryModel)
    { 
        return of(this.response) 
    }
}