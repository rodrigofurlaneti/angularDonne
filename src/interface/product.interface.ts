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
    needToPrint: boolean;
    userId: number;
    userName: string;
    status: boolean;
}
export class ProductModel implements IProductInterface {
    productId: number = 0;    
    productName: string = ''; 
    categoryId: number = 0;
    categoryName : string = " ";
    costPrice: string = " ";
    salePrice: string = " ";
    quantityStock: number = NaN;
    minimumStockQuantity: number = 0;
    totalValueCostOfInventory: string = " ";
    totalValueSaleStock: string = " ";
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    needToPrint: boolean = false;
    userId: number = 0;
    userName: string = '';
    status: boolean = false;
    constructor(){}
  }
