export interface IShoppingListInterface {
    productId: number;
    productName: string;
    categoryId: number;
    categoryName: string;
    costPrice: string;
    quantityToBuy: number;
    totalValueOfLastPurchase: string;
}
export class ShoppingListModel implements IShoppingListInterface {
    productId: number = 0;
    productName: string = '';
    categoryId: number = 0;
    categoryName: string = '';
    costPrice: string = '';
    quantityToBuy: number = 0;
    totalValueOfLastPurchase: string = '';
  }
