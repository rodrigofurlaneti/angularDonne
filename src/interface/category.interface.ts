export interface ICategoryInterface {
    categoryId: number;
    categoryName: string;
}
export class CategoryModel implements ICategoryInterface {
    categoryId: number = 0;
    categoryName: string = '';
    constructor(){}
  }
