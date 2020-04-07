import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.q = {
      'id': ''
    }
    fixture.detectChanges();
  });

  it('test openQuestion', () => {
    let id = 1;
    component.questionOpen = 1;
    expect(component.openQuestion(id)).not.toBeNull();
  });

  it('test openQuestion 2', () => {
    let id = 0;
    component.questionOpen = 1;
    expect(component.openQuestion(id)).not.toBeNull();
  });
});
