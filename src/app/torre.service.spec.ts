import { TestBed } from '@angular/core/testing';

import { TorreService } from './torre.service';

describe('TorreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TorreService = TestBed.get(TorreService);
    expect(service).toBeTruthy();
  });
});
