import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionCancionesComponent } from './edicion-canciones.component';

describe('EdicionCancionesComponent', () => {
  let component: EdicionCancionesComponent;
  let fixture: ComponentFixture<EdicionCancionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionCancionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
