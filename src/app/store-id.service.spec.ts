import { TestBed } from '@angular/core/testing';

import { StoreIdService } from './store-id.service';

describe('StoreIdService', () => {
  let service: StoreIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
