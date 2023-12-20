import { of } from "rxjs";
import { FormOfPaymentListService } from "src/app/formofpayment/formofpayment-list/formofpayment-list.service";

export class FormOfPaymentListMockService extends FormOfPaymentListService
{
    response = [
            {
                "formOfPaymentId": "1",
                "formOfPaymentName": "1",
                "userId": "1",
                "userName": "Product",
            }
        ];
    
    override list()
    { 
        return of(this.response) 
    }
}