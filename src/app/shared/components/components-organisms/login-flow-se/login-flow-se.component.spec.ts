import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFlowSeComponent } from './login-flow-se.component';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { CapsuleComponent } from '../../capsule/capsule.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { ImageComponent } from '../../components-atom/image/image.component';
import { InputComponent } from '../../components-atom/input/input.component';
import { CardPageComponent } from '../../components-atom/card-page/card-page.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { RegistroSeService } from '../../../../services/registro-se.service';
import { RegistroSeServiceMock } from '../../../../services/registro-se.service.spec';
import { Button2Component } from '../../button/button2/button2.component';
import { ModalIconComponent } from '../../modal-icon/modal-icon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginFlowSeComponent', () => {
  let component: LoginFlowSeComponent;
  let fixture: ComponentFixture<LoginFlowSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ],
      declarations: [ 
        LoginFlowSeComponent,
        ModalComponent,
        ButtonComponent,
        CapsuleComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ImageComponent,
        InputComponent,
        CardPageComponent,
        IconComponent,
        Button2Component,
        ModalIconComponent
       ],
       providers: [
        { provide: RegistroSeService, useClass: RegistroSeServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFlowSeComponent);
    component = fixture.componentInstance;
    component.isValidName = true;
    component.isValidEmail = true;
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

  it('handlerChangeName', () => {
    component.handlerChangeName('test');
  });

  it('handlerChangeEmail', () => {
    component.handlerChangeEmail('test@test.cl');
  });

  it('validateName', () => {
    component.validateName('test');
  });

  it('validateEmail', () => {
    component.validateEmail('test@test.cl');
  });

  it('validateForm', () => {
    component.validateForm();
  });

  it('handlerChangePass1', () => {
    component.handlerChangePass1('test');
  });

  it('handlerChangePass2', () => {
    component.handlerChangePass2('test');
  });

  it('validatePasswords', () => {
    component.validatePasswords('test','test');
  });

  it('createAccountEnd', () => {
    component.createAccountEnd('test', 'test');
  });

  it('validateKeySpecial', () => {
    const event = new KeyboardEvent('keypress', { code: 'Q', key: 'Q' });
    component.validateKeySpecial(event);
  });

  it('validateIsLetter', () => {
    const event = new KeyboardEvent('keypress', { code: 'Q', key: 'Q' });
    component.validateIsLetter(event);
  });

  it('validateIsNumber', () => {
    const event = new KeyboardEvent('keypress', { code: 'Q', key: 'Q' });
    component.validateIsNumber(event);
  });

  it('validatePassSE', () => {
    const event = { code: 'Q', key: 'Q' };
    component.validatePassSE(event);
  });

  it('createAccountInit', () => {
    component.createAccountInit();
  });

  it('createAccountValidation', () => {
    const v1 = {value: '1'};
    const v2 = {value: '1'};
    const v3 = {value: '1'};
    const v4 = {value: '1'};
    const v5 = {value: '1'};
    const v6 = {value: '1'};
    component.createAccountValidation(v1, v2, v3, v4, v5, v6);
  });
  
});
