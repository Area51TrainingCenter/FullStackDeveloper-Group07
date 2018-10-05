import { CantantesModule } from './cantantes.module';

describe('CantantesModule', () => {
  let cantantesModule: CantantesModule;

  beforeEach(() => {
    cantantesModule = new CantantesModule();
  });

  it('should create an instance', () => {
    expect(cantantesModule).toBeTruthy();
  });
});
