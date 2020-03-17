import { TestBed } from '@angular/core/testing';

import { RegistrerService } from './register.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('registerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: RegistrerService = TestBed.get(RegistrerService);
    expect(service).toBeTruthy();
  });
});
