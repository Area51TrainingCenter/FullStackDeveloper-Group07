import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReactiveComponent } from './app-reactive.component';

describe('AppReactiveComponent', () => {
  let component: AppReactiveComponent;
  let fixture: ComponentFixture<AppReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
