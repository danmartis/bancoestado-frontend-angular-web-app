import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFlowComponent } from './login-flow.component';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { InputComponent } from '../../components-atom/input/input.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { ImageComponent } from '../../components-atom/image/image.component';
import { IconComponent } from '../../components-atom/icon/icon.component';

describe('LoginFlowComponent', () => {
  let component: LoginFlowComponent;
  let fixture: ComponentFixture<LoginFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginFlowComponent,
        ModalComponent,
        ButtonComponent,
        InputComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ImageComponent,
        ModalComponent,
        IconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emailValidate', () => {
    component.emailValidate('abc@abc.cl');
  });

  it('setEmail', () => {
    component.setEmail('abc@abc.cl');
  });

  it('setEmailReset', () => {
    component.setEmailReset('abc@abc.cl');
  });

  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
  });

});
