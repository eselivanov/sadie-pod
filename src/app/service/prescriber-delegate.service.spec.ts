import { TestBed, inject } from '@angular/core/testing';

import { PrescriberDelegateService } from './prescriber-delegate.service';

describe('PrescriberDelegateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrescriberDelegateService]
    });
  });

  it('should be created', inject([PrescriberDelegateService], (service: PrescriberDelegateService) => {
    expect(service).toBeTruthy();
  }));
});
