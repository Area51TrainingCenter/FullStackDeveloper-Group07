import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticadoGuard } from './autenticado.guard';

describe('AutenticadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticadoGuard]
    });
  });

  it('should ...', inject([AutenticadoGuard], (guard: AutenticadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
