import { TestBed } from '@angular/core/testing';

import { PersonalService } from './personal.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PersonalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      ReactiveFormsModule, ]
  }));

  it('should be created', () => {
    const service: PersonalService = TestBed.get(PersonalService);
    expect(service).toBeTruthy();
  });
});
