export interface ICategoryInterface {
    categoryId: number;
    categoryName: string;
    dateInsert: Date;
    dateUpdate: Date;
    userId: number;
    userName: string;
}
export class CategoryModel implements ICategoryInterface {
    categoryId: number = 0;
    categoryName: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    userId: number = 0;
    userName: string = '';
  }
