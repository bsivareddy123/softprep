import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Timer5Component } from './timer5.component';

describe('Timer5Component', () => {
  let component: Timer5Component;
  let fixture: ComponentFixture<Timer5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timer5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timer5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
