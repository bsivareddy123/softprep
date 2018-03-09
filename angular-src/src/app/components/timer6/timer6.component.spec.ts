import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Timer6Component } from './timer6.component';

describe('Timer6Component', () => {
  let component: Timer6Component;
  let fixture: ComponentFixture<Timer6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timer6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
