export interface IFormOfPaymentInterface {
    formOfPaymentId: number;
    formOfPaymentName: string;
    dateInsert: string,
    dateUpdate: string,
    userId: number;
    userName: string;
}
export class FormOfPaymentModel implements IFormOfPaymentInterface {
    formOfPaymentId: number = 0;
    formOfPaymentName: string = '';
    dateInsert: string = '';
    dateUpdate: string = '';
    userId: number = 0;
    userName: string = '';
    constructor(){}
  }
