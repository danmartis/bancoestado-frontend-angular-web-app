import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountTypeAComponent } from './card-account-type-a.component';

describe('CardAccountTypeAComponent', () => {
  let component: CardAccountTypeAComponent;
  let fixture: ComponentFixture<CardAccountTypeAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccountTypeAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountTypeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
