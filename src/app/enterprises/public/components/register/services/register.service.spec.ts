import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('registerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
});
