import { TestBed } from '@angular/core/testing';

import { RvLibService } from './rv-lib.service';

describe('RvLibService', () => {
  let service: RvLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
