import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordProblemsComponent } from './word-problems.component';

describe('WordProblemsComponent', () => {
  let component: WordProblemsComponent;
  let fixture: ComponentFixture<WordProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
