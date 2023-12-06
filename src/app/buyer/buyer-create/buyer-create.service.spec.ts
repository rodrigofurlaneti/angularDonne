import { TestBed } from '@angular/core/testing';
import { BuyerModel } from 'src/interface/buyer.interface';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BuyerCreateService } from './buyer-create.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuyerCreateComponent', () => {
    let service: BuyerCreateService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['post']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                BuyerCreateService, { provide: HttpClient, useValue: httpClientSpyObj }
            ]
        });
        service = TestBed.inject(BuyerCreateService);
        httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('Method => Save', () => {
        it('with success', () => {
            //Arrange
            var objBuyerModel: BuyerModel = new BuyerModel()
            objBuyerModel.buyerAddress = faker.location.streetAddress();
            objBuyerModel.buyerId = faker.number.int().toString();
            objBuyerModel.buyerName = faker.person.fullName();
            objBuyerModel.buyerPhone = faker.phone.number().toString();
            objBuyerModel.dateInsert = faker.date.anytime();
            objBuyerModel.dateUpdate = faker.date.anytime();
            objBuyerModel.userId = faker.number.int();
            objBuyerModel.userName = faker.person.fullName();
            let httpClientSpy: jasmine.SpyObj<HttpClient>;
            httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
            httpClientSpy.post.and.returnValue(of(objBuyerModel)); // call http get method
            service.save(objBuyerModel).subscribe((data) => { // now have to subscribe getUsers method to get data
            expect(data).toEqual(objBuyerModel);
          });
          expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
        });
      });
});