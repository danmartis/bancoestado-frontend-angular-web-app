import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountHistoryGroupComponent } from './card-account-history-group.component';

describe('CardAccountHistoryGroupComponent', () => {
  let component: CardAccountHistoryGroupComponent;
  let fixture: ComponentFixture<CardAccountHistoryGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccountHistoryGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountHistoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
