import { TestBed, async, inject } from '@angular/core/testing';

import { NoSalvadoGuard } from './no-salvado.guard';

describe('NoSalvadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoSalvadoGuard]
    });
  });

  it('should ...', inject([NoSalvadoGuard], (guard: NoSalvadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
