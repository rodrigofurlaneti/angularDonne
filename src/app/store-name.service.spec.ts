import { TestBed } from '@angular/core/testing';

import { StoreNameService } from './store-name.service';

describe('StoreNameService', () => {
  let service: StoreNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
