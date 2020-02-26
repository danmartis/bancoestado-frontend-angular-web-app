import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupFlowComponent } from './add-group-flow.component';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { MessagePaymentComponent } from '../../message-payment/message-payment.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { IconGroupComponent } from '../../components-atom/icon-group/icon-group.component';
import { CardAccountDetailComponent } from '../../card-account-detail/card-account-detail.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { BadgeComponent } from '../../components-atom/badge/badge.component';
import { InputComponent } from '../../components-atom/input/input.component';
import { BackButtonComponent } from '../../components-atom/back-button/back-button.component';
import { CheckboxComponent } from '../../components-atom/checkbox/checkbox.component';
import { CardDefaultComponent } from '../../components-atom/card-default/card-default.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from 'src/app/domain/parametro.service';

describe('AddGroupFlowComponent', () => {
  let component: AddGroupFlowComponent;
  let fixture: ComponentFixture<AddGroupFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AddGroupFlowComponent,
        ModalComponent,
        ButtonComponent,
        ParagraphComponent,
        MessagePaymentComponent,
        ModalTitleComponent,
        ModalBottomComponent,
        IconGroupComponent,
        CardAccountDetailComponent,
        IconComponent,
        BadgeComponent,
        InputComponent,
        BackButtonComponent,
        CardAccountDetailComponent,
        CheckboxComponent,
        CardDefaultComponent
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
    fixture = TestBed.createComponent(AddGroupFlowComponent);
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
