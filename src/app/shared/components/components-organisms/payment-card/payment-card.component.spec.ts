import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardComponent } from './payment-card.component';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { CardMethodPaymentComponent } from '../../card-method-payment/card-method-payment.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { CardDefaultComponent } from '../../components-atom/card-default/card-default.component';
import { BackButtonComponent } from '../../components-atom/back-button/back-button.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { RadioComponent } from '../../components-atom/radio/radio.component';
import { ImageComponent } from '../../components-atom/image/image.component';
import { PaymentMethodType } from 'src/app/shared/utils/options';
import { Button2Component } from '../../button/button2/button2.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('PaymentCardComponent', () => {
  let component: PaymentCardComponent;
  let fixture: ComponentFixture<PaymentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule
      ],
      declarations: [ 
        PaymentCardComponent,
        ModalBottomComponent,
        ButtonComponent,
        CardMethodPaymentComponent,
        ModalTitleComponent,
        CardDefaultComponent,
        BackButtonComponent,
        IconComponent,
        RadioComponent,
        ImageComponent,
        Button2Component,
        ParagraphComponent,
        DropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardComponent);
    component = fixture.componentInstance;
    component.method = {
      number: '123',
      type: PaymentMethodType.Visa,
      primary: true,
      bank: 'BECH'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
    expect(component).toBeTruthy();
  });
});
