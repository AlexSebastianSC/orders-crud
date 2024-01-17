import { TestBed } from '@angular/core/testing';

import { OrdersSharedDataService } from './orders-shared-data.service';

describe('OrdersSharedDataService', () => {
  let service: OrdersSharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersSharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
