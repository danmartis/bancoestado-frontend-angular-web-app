import { TestBed } from '@angular/core/testing';

import { RecoverPassService } from './recover-pass.service';

describe('RecoverPassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecoverPassService = TestBed.get(RecoverPassService);
    expect(service).toBeTruthy();
  });
});
