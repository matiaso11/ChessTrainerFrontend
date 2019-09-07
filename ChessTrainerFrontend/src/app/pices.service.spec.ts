import { TestBed } from '@angular/core/testing';

import { PicesService } from './pices.service';

describe('PicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicesService = TestBed.get(PicesService);
    expect(service).toBeTruthy();
  });
});
