import { of } from "rxjs";
import { PaymentCreateService } from "src/app/payment/payment-create/payment-create.service";
import { PaymentModel } from "src/interface/payment.interface";

export class PaymentCreateMockService extends PaymentCreateService
{
    response = [
        {
            "commandId": 1,
            "paymentId": 1,
            "formOfPaymentId": 1,
            "formOfPaymentName": "Forma de pagamento",
            "paymentAmount": "20.00",
            "paymentType":  "Tipo de pagamento",
            "userId": 1,
            "userName": "Administrador"
        }
    ];
    
    override save(payment: PaymentModel)
    { 
        return of(this.response) 
    }
}