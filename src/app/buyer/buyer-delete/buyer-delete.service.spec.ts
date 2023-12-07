import { TestBed } from '@angular/core/testing';
import { BuyerModel } from 'src/interface/buyer.interface';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BuyerDeleteService } from './buyer-delete.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuyerDeleteComponent', () => {
    let service: BuyerDeleteService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    // #region [BeforeEach]

    beforeEach(() => {
        let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['post']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                BuyerDeleteService, { provide: HttpClient, useValue: httpClientSpyObj }
            ]
        });
        service = TestBed.inject(BuyerDeleteService);
        httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    // #endregion

    // #region [Should]

    describe('Should be', () => {
        it('Deleted', () => {
            expect(service).toBeTruthy();
        });
    });

    // #endregion

    // #region [Methods]

    // #endregion
});