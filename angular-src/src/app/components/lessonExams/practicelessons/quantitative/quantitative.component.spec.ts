import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitativeComponent } from './quantitative.component';

describe('QuantitativeComponent', () => {
  let component: QuantitativeComponent;
  let fixture: ComponentFixture<QuantitativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantitativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
