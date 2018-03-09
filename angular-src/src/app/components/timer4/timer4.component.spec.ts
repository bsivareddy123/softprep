import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Timer4Component } from './timer4.component';

describe('Timer4Component', () => {
  let component: Timer4Component;
  let fixture: ComponentFixture<Timer4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timer4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
