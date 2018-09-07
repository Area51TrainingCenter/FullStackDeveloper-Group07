import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecetaComponent } from './formulario-receta.component';

describe('FormularioRecetaComponent', () => {
  let component: FormularioRecetaComponent;
  let fixture: ComponentFixture<FormularioRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
