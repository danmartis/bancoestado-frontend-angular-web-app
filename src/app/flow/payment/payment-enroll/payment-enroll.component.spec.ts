import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEnrollComponent } from './payment-enroll.component';
import { ModalComponent } from 'src/app/components/components-organisms/modal/modal.component';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { MessagePaymentComponent } from 'src/app/components/message-payment/message-payment.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { CardDefaultComponent } from 'src/app/components/components-atom/card-default/card-default.component';
import { CardMethodPaymentComponent } from 'src/app/components/card-method-payment/card-method-payment.component';
import { ImageComponent } from 'src/app/components/components-atom/image/image.component';
import { MainTitleComponent } from 'src/app/components/components-atom/main-title/main-title.component';
import { BackButtonComponent } from 'src/app/components/components-atom/back-button/back-button.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { BackButtonPageComponent } from 'src/app/components/components-atom/back-button-page/back-button-page.component';
import { ModalTitleComponent } from 'src/app/components/components-atom/modal-title/modal-title.component';
import { IconComponent } from 'src/app/components/components-atom/icon/icon.component';
import { RadioComponent } from 'src/app/components/components-atom/radio/radio.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaymentEnrollComponent', () => {
  let component: PaymentEnrollComponent;
  let fixture: ComponentFixture<PaymentEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        PaymentEnrollComponent,
        ModalComponent,
        ButtonComponent,
        ParagraphComponent,
        MessagePaymentComponent,
        FooterDefaultComponent,
        PageComponent,
        CardMethodPaymentComponent,
        ImageComponent,
        MainTitleComponent,
        BackButtonComponent,
        HeaderMainComponent,
        BackButtonPageComponent,
        ModalTitleComponent,
        IconComponent,
        RadioComponent,
        SidebarComponent,
        CapsuleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
  });
});