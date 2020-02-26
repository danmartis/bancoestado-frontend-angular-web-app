import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountTypeBComponent } from './card-account-type-b.component';

describe('CardAccountTypeBComponent', () => {
  let component: CardAccountTypeBComponent;
  let fixture: ComponentFixture<CardAccountTypeBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccountTypeBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountTypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
