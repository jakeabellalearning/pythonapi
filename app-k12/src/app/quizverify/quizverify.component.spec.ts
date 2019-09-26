import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizverifyComponent } from './quizverify.component';

describe('QuizverifyComponent', () => {
  let component: QuizverifyComponent;
  let fixture: ComponentFixture<QuizverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
