import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredPaymentMethodsComponent } from './registered-payment-methods.component';
import { PaymentCardComponent } from '../components-organisms/payment-card/payment-card.component';
import { PageTitleComponent } from '../components-atom/page-title/page-title.component';
import { ModalBottomComponent } from '../components-organisms/modal-bottom/modal-bottom.component';
import { ButtonComponent } from '../components-atom/button/button.component';
import { CardMethodPaymentComponent } from '../card-method-payment/card-method-payment.component';
import { ModalTitleComponent } from '../components-atom/modal-title/modal-title.component';
import { CardDefaultComponent } from '../components-atom/card-default/card-default.component';
import { BackButtonComponent } from '../components-atom/back-button/back-button.component';
import { IconComponent } from '../components-atom/icon/icon.component';
import { RadioComponent } from '../components-atom/radio/radio.component';
import { ImageComponent } from '../components-atom/image/image.component';

describe('RegisteredPaymentMethodsComponent', () => {
  let component: RegisteredPaymentMethodsComponent;
  let fixture: ComponentFixture<RegisteredPaymentMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RegisteredPaymentMethodsComponent,
        PaymentCardComponent,
        PageTitleComponent,
        ModalBottomComponent,
        ButtonComponent,
        CardMethodPaymentComponent,
        ModalTitleComponent,
        CardDefaultComponent,
        BackButtonComponent,
        IconComponent,
        BackButtonComponent,
        RadioComponent,
        ImageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getPrimaryRegisteredPaymentMethod', () => {
    component.getPrimaryRegisteredPaymentMethod();
  });

  it('getMethod', () => {
    component.getMethod();
  });
});
