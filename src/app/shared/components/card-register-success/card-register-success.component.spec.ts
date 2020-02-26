import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegisterSuccessComponent } from './card-register-success.component';

describe('CardRegisterSuccessComponent', () => {
  let component: CardRegisterSuccessComponent;
  let fixture: ComponentFixture<CardRegisterSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRegisterSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
