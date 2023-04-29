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
    imagePath: string;
    dateInsert: Date;
    dateUpdate: Date;
    needToPrint: boolean;
    storeId: number;
    storeName: string;
    userId: number;
    userName: string;
    status: boolean;
}
export class ProductModel implements IProductInterface {
    productId: number = 0;    
    productName: string = ''; 
    categoryId: number = 0;
    categoryName : string = " ";
    costPrice: string = "0";
    salePrice: string = "0";
    quantityStock: number = 0;
    minimumStockQuantity: number = 0;
    totalValueCostOfInventory: string = "0";
    totalValueSaleStock: string = "0";
    imagePath: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    needToPrint: boolean = false;
    storeId: number = 0;
    storeName: string = '';
    userId: number = 0;
    userName: string = '';
    status: boolean = false;
    constructor(){}
  }
