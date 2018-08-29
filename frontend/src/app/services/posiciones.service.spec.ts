import { TestBed, inject } from '@angular/core/testing';

import { PosicionesService } from './posiciones.service';

describe('PosicionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosicionesService]
    });
  });

  it('should be created', inject([PosicionesService], (service: PosicionesService) => {
    expect(service).toBeTruthy();
  }));
});
