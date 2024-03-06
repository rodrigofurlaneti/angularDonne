import { TestBed } from '@angular/core/testing';
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
  // #endregion
});