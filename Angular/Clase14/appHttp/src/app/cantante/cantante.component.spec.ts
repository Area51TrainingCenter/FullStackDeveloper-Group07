import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantanteComponent } from './cantante.component';

describe('CantanteComponent', () => {
  let component: CantanteComponent;
  let fixture: ComponentFixture<CantanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
