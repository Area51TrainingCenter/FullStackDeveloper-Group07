import { CancionesModule } from './canciones.module';

describe('CancionesModule', () => {
  let cancionesModule: CancionesModule;

  beforeEach(() => {
    cancionesModule = new CancionesModule();
  });

  it('should create an instance', () => {
    expect(cancionesModule).toBeTruthy();
  });
});
