export interface ICompanyAssetInterface {
    companyAssetId: number;
    companyAssetName: string;
    costPrice: string;
    dateInsert: Date;
    dateUpdate: Date;
    userId: number;
    userName: string;
}
export class CompanyAssetModel implements ICompanyAssetInterface {
    companyAssetId: number = 0;
    companyAssetName: string = '';
    costPrice: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    userId: number = 0;
    userName: string = '';
  }
