import { TestBed, inject } from '@angular/core/testing';

import { PrescriberLocationService } from './prescriber-location.service';

describe('PrescriberLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrescriberLocationService]
    });
  });

  it('should be created', inject([PrescriberLocationService], (service: PrescriberLocationService) => {
    expect(service).toBeTruthy();
  }));
});
