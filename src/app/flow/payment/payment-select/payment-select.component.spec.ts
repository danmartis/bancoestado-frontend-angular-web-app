import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSelectComponent } from './payment-select.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { CardMethodPaymentComponent } from 'src/app/shared/components/card-method-payment/card-method-payment.component';
import { MainTitleComponent } from 'src/app/shared/components/components-atom/main-title/main-title.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { RadioComponent } from 'src/app/shared/components/components-atom/radio/radio.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaymentSelectComponent', () => {
  let component: PaymentSelectComponent;
  let fixture: ComponentFixture<PaymentSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PaymentSelectComponent,
        FooterDefaultComponent,
        PageComponent,
        CardMethodPaymentComponent,
        MainTitleComponent,
        ParagraphComponent,
        HeaderMainComponent,
        RadioComponent,
        ImageComponent,
        IconComponent,
        ButtonComponent,
        SidebarComponent,
        CapsuleComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
