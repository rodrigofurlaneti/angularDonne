export interface ICategoryInterface {
    categoryId: number;
    categoryName: string;
    storeName: string;
    storeId: number;
}
export class CategoryModel implements ICategoryInterface {
    categoryId: number = 0;
    categoryName: string = '';
    storeName: string = ' ';
    storeId: number = 0;
    constructor(){}
  }
