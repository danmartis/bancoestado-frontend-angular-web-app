import { TestBed } from '@angular/core/testing';

import { RecoverPassService } from './recover-pass.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecoverPassService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RecoverPassService = TestBed.get(RecoverPassService);
    expect(service).toBeTruthy();
  });
});
