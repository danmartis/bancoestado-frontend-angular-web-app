import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGroupComponent } from './account-group.component';
import { PageTitleComponent } from '../components-atom/page-title/page-title.component';
import { EmptyAreasComponent } from '../empty-areas/empty-areas.component';
import { CardAccountGroupComponent } from '../card-account-group/card-account-group.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardGroupComponent } from '../card-group/card-group.component';
import { AddGroupFlowComponent } from '../components-organisms/add-group-flow/add-group-flow.component';
import { CardAddedGroupComponent } from '../card-added-group/card-added-group.component';
import { CheckboxComponent } from '../components-atom/checkbox/checkbox.component';
import { IconComponent } from '../components-atom/icon/icon.component';
import { IconGroupComponent } from '../components-atom/icon-group/icon-group.component';
import { ModalComponent } from '../components-organisms/modal/modal.component';
import { ParagraphComponent } from '../components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from '../components-atom/modal-title/modal-title.component';
import { ModalBottomComponent } from '../components-organisms/modal-bottom/modal-bottom.component';
import { ButtonComponent } from '../components-atom/button/button.component';
import { CardAccountDetailComponent } from '../card-account-detail/card-account-detail.component';
import { InputComponent } from '../components-atom/input/input.component';
import { MessagePaymentComponent } from '../message-payment/message-payment.component';
import { BadgeComponent } from '../components-atom/badge/badge.component';
import { BackButtonComponent } from '../components-atom/back-button/back-button.component';
import { CardDefaultComponent } from '../components-atom/card-default/card-default.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from 'src/app/domain/parametro.service';
import { CardAccountTypeBComponent } from '../accounts/card-account-type-b/card-account-type-b.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { Button2Component } from '../button/button2/button2.component';
import { ModalIconComponent } from '../modal-icon/modal-icon.component';
import { CardAccountTypeAComponent } from '../accounts/card-account-type-a/card-account-type-a.component';

describe('AccountGroupComponent', () => {
  let component: AccountGroupComponent;
  let fixture: ComponentFixture<AccountGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AccountGroupComponent ,
        PageTitleComponent,
        EmptyAreasComponent,
        CardAccountGroupComponent,
        CardGroupComponent,
        AddGroupFlowComponent,
        CardAddedGroupComponent,
        CheckboxComponent,
        IconComponent,
        IconGroupComponent,
        ModalComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ModalBottomComponent,
        ButtonComponent,
        CardAccountDetailComponent,
        InputComponent,
        MessagePaymentComponent,
        BadgeComponent,
        BackButtonComponent,
        CardDefaultComponent,
        CardAccountTypeBComponent,
        DropdownComponent,
        Button2Component,
        ModalIconComponent,
        CardAccountTypeAComponent
      ],
      imports: [
        NgbModule,
        RouterTestingModule
      ],
      providers: [
        ParametroService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setGroupAccounts', () => {
    component.setGroupAccounts();
  });

  it('activateTab', () => {
    component.activateTab('a');
  });

  it('isActiveTab', () => {
    component.isActiveTab('a');
  });

  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
  });

});
