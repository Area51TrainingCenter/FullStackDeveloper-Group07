import { TestBed, async, inject } from '@angular/core/testing';

import { CargaGuard } from './carga.guard';

describe('CargaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaGuard]
    });
  });

  it('should ...', inject([CargaGuard], (guard: CargaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
