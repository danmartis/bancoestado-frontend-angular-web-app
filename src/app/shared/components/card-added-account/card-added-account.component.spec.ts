import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddedAccountComponent } from './card-added-account.component';

describe('CardAddedAccountComponent', () => {
  let component: CardAddedAccountComponent;
  let fixture: ComponentFixture<CardAddedAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAddedAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
