import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePaymentComponent } from './message-payment.component';
import { IconComponent } from '../components-atom/icon/icon.component';

describe('MessagePaymentComponent', () => {
  let component: MessagePaymentComponent;
  let fixture: ComponentFixture<MessagePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MessagePaymentComponent,
        IconComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
