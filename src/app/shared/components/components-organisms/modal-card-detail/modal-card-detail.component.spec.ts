import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardDetailComponent } from './modal-card-detail.component';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { InputComponent } from '../../components-atom/input/input.component';
import { RadioComponent } from '../../components-atom/radio/radio.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { CheckboxComponent } from '../../components-atom/checkbox/checkbox.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { BadgeComponent } from '../../components-atom/badge/badge.component';
import { CardAccountDetailComponent } from '../../card-account-detail/card-account-detail.component';
import { BackButtonComponent } from '../../components-atom/back-button/back-button.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { CardDefaultComponent } from '../../components-atom/card-default/card-default.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Button2Component } from '../../button/button2/button2.component';
import { CardAccountDetailComponentNew } from '../../accounts/card-account-detail-new/card-account-detail-new.component';

describe('ModalCardDetailComponent', () => {
  let component: ModalCardDetailComponent;
  let fixture: ComponentFixture<ModalCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalCardDetailComponent,
        ModalBottomComponent,
        ButtonComponent,
        InputComponent,
        RadioComponent,
        ParagraphComponent,
        CheckboxComponent,
        ModalTitleComponent,
        BadgeComponent,
        CardAccountDetailComponent,
        BackButtonComponent,
        IconComponent,
        CardDefaultComponent,
        Button2Component,
        CardAccountDetailComponentNew
      ],
      imports: [
        NgbModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCardDetailComponent);
    component = fixture.componentInstance;
    component.account = {
      clientNumber: "",
      title: "",
      value: 0,
      uniqueId: 0,
      type: ""
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
  });
  
  it('formatNumber', () => {
    component.formatNumber('123123');
  });

  it('setValueToPay', () => {
    component.setValueToPay(123123);
  });

  it('getFeesToPay', () => {
    component.getFeesToPay();
  });

  it('selectedMonto', () => {
    component.selectedMonto('123');
  });
});
