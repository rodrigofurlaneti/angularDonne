import { TestBed } from '@angular/core/testing';
import { BuyerModel } from 'src/interface/buyer.interface';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BuyerListService } from './buyer-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuyerListService', () => {
    let service: BuyerListService;

    // #region [BeforeEach]

    beforeEach(() => {
        let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['post']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                BuyerListService, { provide: HttpClient, useValue: httpClientSpyObj }
            ]
        });
        service = TestBed.inject(BuyerListService);
    });

    // #endregion

    // #region [Should]

    describe('Should be', () => {
        it('Created', () => {
            expect(service).toBeTruthy();
        });
    });

    // #endregion

// #region [Methods]

describe('Method => List', () => {
    it('with success', () => {
        //Arrange
        let objBuyerModel: BuyerModel = new BuyerModel()
        objBuyerModel.buyerAddress = faker.location.streetAddress();
        objBuyerModel.buyerName = faker.person.fullName();
        objBuyerModel.buyerPhone = faker.phone.number().toString();
        objBuyerModel.dateInsert = faker.date.anytime();
        objBuyerModel.dateUpdate = faker.date.anytime();
        objBuyerModel.userId = faker.number.int();
        objBuyerModel.userName = faker.person.fullName();
        let getSpy = spyOn(service, 'list').and.returnValue(of(objBuyerModel));
        service.list().subscribe((data) => { // now have to subscribe getUsers method to get data
            expect(data).toEqual(objBuyerModel);
      });
      expect(service.list).toHaveBeenCalledTimes(1);
    });
  });

  describe('Method => ListBuyerStatus', () => {
    it('with success', () => {
        //Arrange
        let objBuyerModel: BuyerModel = new BuyerModel()
        objBuyerModel.buyerAddress = faker.location.streetAddress();
        objBuyerModel.buyerName = faker.person.fullName();
        objBuyerModel.buyerPhone = faker.phone.number().toString();
        objBuyerModel.dateInsert = faker.date.anytime();
        objBuyerModel.dateUpdate = faker.date.anytime();
        objBuyerModel.userId = faker.number.int();
        objBuyerModel.userName = faker.person.fullName();
        let id:number = faker.number.int();
        let getSpy = spyOn(service, 'listBuyerStatus').and.returnValue(of(objBuyerModel));
        service.listBuyerStatus(id).subscribe((data) => {
            expect(data).toEqual(objBuyerModel);
      });
      expect(service.listBuyerStatus).toHaveBeenCalledTimes(1);
    });
  });

  // #endregion
});