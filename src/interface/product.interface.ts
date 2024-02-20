export interface IProductInterface {
    productId: number;
    productName: string;
    categoryId: number;
    categoryName: string;
    costPrice: string;
    salePrice: string;
    quantityStock: number;
    minimumStockQuantity: number;
    totalValueCostOfInventory: string;
    totalValueSaleStock: string;
    dateInsert: Date;
    dateUpdate: Date;
    needToPrint: number;
    userId: number;
    userName: string;
    status: number;
    quantityToBuy: number;
    totalValueOfLastPurchase: string;
}
export class ProductModel implements IProductInterface {
    productId: number = 0;    
    productName: string = ''; 
    categoryId: number = 0;
    categoryName : string = '';
    costPrice: string = '';
    salePrice: string = '';
    quantityStock: number = 0;
    minimumStockQuantity: number = 0;
    totalValueCostOfInventory: string = '';
    totalValueSaleStock: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    needToPrint: number = 0;
    userId: number = 0;
    userName: string = '';
    status: number = 0;
    quantityToBuy: number = 0;
    totalValueOfLastPurchase: string = '';
  }
