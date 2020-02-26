import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountDetailComponentNew } from './card-account-detail-new.component';

describe('CardAccountDetailComponentNew', () => {
  let component: CardAccountDetailComponentNew;
  let fixture: ComponentFixture<CardAccountDetailComponentNew>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccountDetailComponentNew ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountDetailComponentNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
