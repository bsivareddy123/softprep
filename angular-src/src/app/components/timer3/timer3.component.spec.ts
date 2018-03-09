import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Timer3Component } from './timer3.component';

describe('Timer3Component', () => {
  let component: Timer3Component;
  let fixture: ComponentFixture<Timer3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timer3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
