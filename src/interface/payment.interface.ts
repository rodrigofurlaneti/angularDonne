export interface IPaymentInterface {
    paymentId: number;
    commandId: number;
    formOfPaymentId: number;
    formOfPaymentName: string;
    paymentAmount: string;
    paymentType: string;
    dateInsert: Date;
    dateUpdate: Date;
    userId: number;
    userName: string;
}

export class PaymentModel implements IPaymentInterface {
    paymentId: number = 0;
    commandId: number = 0;
    formOfPaymentId: number = 0;
    formOfPaymentName: string = '';
    paymentAmount: string = '';
    paymentType: string = '';
    dateInsert: Date = new Date();
    dateUpdate: Date = new Date();
    userId: number = 0;
    userName: string = '';
    constructor(){}
  }
