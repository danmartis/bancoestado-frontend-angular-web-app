import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFlowBeComponent } from './login-flow-be.component';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { MessagePaymentComponent } from '../../message-payment/message-payment.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { ImageComponent } from '../../components-atom/image/image.component';
import { CheckboxComponent } from '../../components-atom/checkbox/checkbox.component';
import { CardMethodPaymentComponent } from '../../card-method-payment/card-method-payment.component';
import { InputComponent } from '../../components-atom/input/input.component';
import { CardPageComponent } from '../../components-atom/card-page/card-page.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { RadioComponent } from '../../components-atom/radio/radio.component';
import { ModalIconComponent } from '../../modal-icon/modal-icon.component';
import { Button2Component } from '../../button/button2/button2.component';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('LoginFlowBeComponent', () => {
  let component: LoginFlowBeComponent;
  let fixture: ComponentFixture<LoginFlowBeComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        NgbModule
      ],
      declarations: [ 
        LoginFlowBeComponent,
        ModalComponent,
        ButtonComponent,
        ParagraphComponent,
        MessagePaymentComponent,
        ModalTitleComponent,
        ButtonComponent,
        ImageComponent,
        CheckboxComponent,
        CardMethodPaymentComponent,
        InputComponent,
        MessagePaymentComponent,
        ModalComponent,
        CardPageComponent,
        IconComponent,
        RadioComponent,
        Button2Component,
        ModalIconComponent,
        DropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFlowBeComponent);
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
