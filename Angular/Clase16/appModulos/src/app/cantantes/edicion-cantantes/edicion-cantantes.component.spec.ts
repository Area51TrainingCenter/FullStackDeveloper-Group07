import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionCantantesComponent } from './edicion-cantantes.component';

describe('EdicionCantantesComponent', () => {
  let component: EdicionCantantesComponent;
  let fixture: ComponentFixture<EdicionCantantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionCantantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionCantantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
