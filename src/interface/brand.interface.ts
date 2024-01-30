export interface IBrandInterface {
    brandId: number;
    brandName: string;
}

export class BrandModel implements IBrandInterface {
    brandId: number = 0;    
    brandName: string = '';
    }