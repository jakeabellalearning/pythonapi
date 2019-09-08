import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicpageComponent } from './topicpage.component';

describe('TopicpageComponent', () => {
  let component: TopicpageComponent;
  let fixture: ComponentFixture<TopicpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
