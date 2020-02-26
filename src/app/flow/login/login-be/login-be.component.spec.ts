import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBeComponent } from './login-be.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { LoginFlowBeComponent } from 'src/app/components/components-organisms/login-flow-be/login-flow-be.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { BackButtonPageComponent } from 'src/app/components/components-atom/back-button-page/back-button-page.component';
import { ModalComponent } from 'src/app/components/components-organisms/modal/modal.component';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { MessagePaymentComponent } from 'src/app/components/message-payment/message-payment.component';
import { ModalTitleComponent } from 'src/app/components/components-atom/modal-title/modal-title.component';
import { CheckboxComponent } from 'src/app/components/components-atom/checkbox/checkbox.component';
import { CardMethodPaymentComponent } from 'src/app/components/card-method-payment/card-method-payment.component';
import { ImageComponent } from 'src/app/components/components-atom/image/image.component';
import { CardPageComponent } from 'src/app/components/components-atom/card-page/card-page.component';
import { InputComponent } from 'src/app/components/components-atom/input/input.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { IconComponent } from 'src/app/components/components-atom/icon/icon.component';
import { RadioComponent } from 'src/app/components/components-atom/radio/radio.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginBeComponent', () => {
  let component: LoginBeComponent;
  let fixture: ComponentFixture<LoginBeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginBeComponent,
        PageComponent,
        FooterDefaultComponent,
        LoginFlowBeComponent,
        HeaderMainComponent,
        BackButtonPageComponent,
        ModalComponent,
        ButtonComponent,
        ParagraphComponent,
        MessagePaymentComponent,
        ModalTitleComponent,
        ModalComponent,
        CheckboxComponent,
        CardMethodPaymentComponent,
        ImageComponent,
        CardPageComponent,
        InputComponent,
        SidebarComponent,
        IconComponent,
        RadioComponent,
        CapsuleComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
