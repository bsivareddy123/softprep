import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulllengthTestComponent } from './fulllength-test.component';

describe('FulllengthTestComponent', () => {
  let component: FulllengthTestComponent;
  let fixture: ComponentFixture<FulllengthTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulllengthTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulllengthTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
