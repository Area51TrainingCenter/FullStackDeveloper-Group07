import { TestBed, inject } from '@angular/core/testing';

import { CantanteService } from './cantante.service';

describe('CantanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CantanteService]
    });
  });

  it('should be created', inject([CantanteService], (service: CantanteService) => {
    expect(service).toBeTruthy();
  }));
});
