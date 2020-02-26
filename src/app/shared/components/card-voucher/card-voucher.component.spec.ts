import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVoucherComponent } from './card-voucher.component';

describe('CardVoucherComponent', () => {
  let component: CardVoucherComponent;
  let fixture: ComponentFixture<CardVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
