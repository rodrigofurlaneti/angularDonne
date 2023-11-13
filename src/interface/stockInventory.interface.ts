export interface IStockInventoryInterface {
    totalValueCostOfInventory: string;
    totalValueSaleStock: string;    
}
export class StockInventoryModel implements IStockInventoryInterface {
    totalValueCostOfInventory: string = '';
    totalValueSaleStock: string = '';
  }