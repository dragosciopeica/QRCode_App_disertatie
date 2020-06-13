import { TestBed } from '@angular/core/testing';

import { OrderPService } from './order-p.service';

describe('OrderPService', () => {
  let service: OrderPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
