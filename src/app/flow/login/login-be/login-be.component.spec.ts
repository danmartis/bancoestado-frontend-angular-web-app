import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBeComponent } from './login-be.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { LoginFlowBeComponent } from 'src/app/shared/components/components-organisms/login-flow-be/login-flow-be.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { MessagePaymentComponent } from 'src/app/shared/components/message-payment/message-payment.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { CardMethodPaymentComponent } from 'src/app/shared/components/card-method-payment/card-method-payment.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { CardPageComponent } from 'src/app/shared/components/components-atom/card-page/card-page.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { RadioComponent } from 'src/app/shared/components/components-atom/radio/radio.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { ModalIconComponent } from 'src/app/shared/components/modal-icon/modal-icon.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
        CapsuleComponent,
        Button2Component,
        ModalIconComponent,
        DropdownComponent
      ],
      imports: [
        RouterTestingModule,
        NgbModule
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
