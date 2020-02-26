import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountHistoryComponent } from './card-account-history.component';

describe('CardAccountHistoryComponent', () => {
  let component: CardAccountHistoryComponent;
  let fixture: ComponentFixture<CardAccountHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccountHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
