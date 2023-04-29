export interface IFormOfPaymentInterface {
    formOfPaymentId: number;
    formOfPaymentName: string;
    dateInsert: Date,
    dateUpdate: Date,
    storeId: number;
    storeName: string;
    userId: number;
    userName: string;
}
export class FormOfPaymentModel implements IFormOfPaymentInterface {
    formOfPaymentId: number = 0;
    formOfPaymentName: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    storeId: number = 0;
    storeName: string = " ";
    userId: number = 0;
    userName: string = " ";
    constructor(){}
  }
