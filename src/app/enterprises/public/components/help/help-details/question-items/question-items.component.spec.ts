import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionItemsComponent } from './question-items.component';

describe('QuestionItemsComponent', () => {
  let component: QuestionItemsComponent;
  let fixture: ComponentFixture<QuestionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionItemsComponent);
    component = fixture.componentInstance;
    component.item = {
      'category' : ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
