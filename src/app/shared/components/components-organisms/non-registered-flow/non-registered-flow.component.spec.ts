import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRegisteredFlowComponent } from './non-registered-flow.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { CardAccountDetailComponent } from '../../card-account-detail/card-account-detail.component';
import { PageTitleComponent } from '../../components-atom/page-title/page-title.component';
import { BackButtonComponent } from '../../components-atom/back-button/back-button.component';
import { CardDefaultComponent } from '../../components-atom/card-default/card-default.component';
import { CheckboxComponent } from '../../components-atom/checkbox/checkbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from 'src/app/domain/parametro.service';
import { Button2Component } from '../../button/button2/button2.component';
import { CardAccountTypeAComponent } from '../../accounts/card-account-type-a/card-account-type-a.component';
import { ModalIconComponent } from '../../modal-icon/modal-icon.component';

describe('NonRegisteredFlowComponent', () => {
  let component: NonRegisteredFlowComponent;
  let fixture: ComponentFixture<NonRegisteredFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NonRegisteredFlowComponent,
        IconComponent,
        ModalComponent,
        ButtonComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ModalBottomComponent,
        CardAccountDetailComponent,
        PageTitleComponent,
        BackButtonComponent,
        CardDefaultComponent,
        CheckboxComponent,
        Button2Component,
        CardAccountTypeAComponent,
        ModalIconComponent
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
    fixture = TestBed.createComponent(NonRegisteredFlowComponent);
    component = fixture.componentInstance;
    component.accounts =[ {
      clientNumber: "",
      title: "",
      value: 0,
      uniqueId: 0,
      type: ""
    }];
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
