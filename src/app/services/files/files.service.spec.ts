import { TestBed } from '@angular/core/testing';

import { FilesService } from './files.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: FilesService = TestBed.get(FilesService);
    expect(service).toBeTruthy();
  });
});
