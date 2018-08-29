import { TestBed, inject } from '@angular/core/testing';

import { IndexBodyService } from './index-body.service';

describe('IndexBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexBodyService]
    });
  });

  it('should be created', inject([IndexBodyService], (service: IndexBodyService) => {
    expect(service).toBeTruthy();
  }));
});
