import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCantantesComponent } from './listado-cantantes.component';

describe('ListadoCantantesComponent', () => {
  let component: ListadoCantantesComponent;
  let fixture: ComponentFixture<ListadoCantantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCantantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCantantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
