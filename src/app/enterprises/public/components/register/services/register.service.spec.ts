import { TestBed } from '@angular/core/testing';

import { RegistrerService } from './register.service';

describe('registerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrerService = TestBed.get(RegistrerService);
    expect(service).toBeTruthy();
  });
});
