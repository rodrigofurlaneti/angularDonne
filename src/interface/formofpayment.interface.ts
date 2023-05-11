export interface IFormOfPaymentInterface {
    formOfPaymentId: number;
    formOfPaymentName: string;
    dateInsert: Date;
    dateUpdate: Date;
    userId: number;
    userName: string;
}
export class FormOfPaymentModel implements IFormOfPaymentInterface {
    formOfPaymentId: number = 0;
    formOfPaymentName: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    userId: number = 0;
    userName: string = '';
    constructor(){}
  }
