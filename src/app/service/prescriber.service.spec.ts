import { TestBed, inject } from '@angular/core/testing';

import { PrescriberService } from './prescriber.service';

describe('PrescriberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrescriberService]
    });
  });

  it('should be created', inject([PrescriberService], (service: PrescriberService) => {
    expect(service).toBeTruthy();
  }));
});
