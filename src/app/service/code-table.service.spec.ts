import { TestBed, inject } from '@angular/core/testing';

import { CodeTableService } from './code-table.service';
import { HttpClientModule } from '@angular/common/http';

describe('CodeTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      providers: [CodeTableService]
    });
  });

  it('should be created', inject([CodeTableService], (service: CodeTableService) => {
    expect(service).toBeTruthy();
  }));
});
