import { TestBed, inject } from '@angular/core/testing';

import { RecetasService } from './recetas.service';

describe('RecetasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetasService]
    });
  });

  it('should be created', inject([RecetasService], (service: RecetasService) => {
    expect(service).toBeTruthy();
  }));
});
