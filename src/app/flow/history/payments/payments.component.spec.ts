import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsComponent } from './payments.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { CardAccountDetailComponent } from 'src/app/shared/components/card-account-detail/card-account-detail.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { ChartMonthsComponent } from 'src/app/shared/components/components-atom/chart-months/chart-months.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { TriangleIconDetailComponent } from 'src/app/shared/components/components-atom/triangle-icon-detail/triangle-icon-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainTitleComponent } from 'src/app/shared/components/components-atom/main-title/main-title.component';
import { NonRegisteredFlowComponent } from 'src/app/shared/components/components-organisms/non-registered-flow/non-registered-flow.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { ModalBottomComponent } from 'src/app/shared/components/components-organisms/modal-bottom/modal-bottom.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { BackButtonComponent } from 'src/app/shared/components/components-atom/back-button/back-button.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from 'src/app/domain/parametro.service';
import { CardAccountHistoryComponent } from 'src/app/shared/components/accounts/card-account-history/card-account-history.component';
import { CardAccountHistoryGroupComponent } from 'src/app/shared/components/accounts/card-account-history-group/card-account-history-group.component';
import { GraphDisplayValueComponent } from 'src/app/shared/components/graph-display-value/graph-display-value.component';
import { ModalIconComponent } from 'src/app/shared/components/modal-icon/modal-icon.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { CardAccountTypeAComponent } from 'src/app/shared/components/accounts/card-account-type-a/card-account-type-a.component';

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PaymentsComponent,
        FooterDefaultComponent,
        PageComponent,
        CardAccountDetailComponent,
        CardDefaultComponent,
        InputComponent,
        PageTitleComponent,
        ChartMonthsComponent,
        ButtonComponent,
        ParagraphComponent,
        IconComponent,
        TriangleIconDetailComponent,
        MainTitleComponent,
        NonRegisteredFlowComponent,
        BackButtonPageComponent,
        HeaderMainComponent,
        CheckboxComponent,
        ModalTitleComponent,
        ModalBottomComponent,
        ModalComponent,
        SidebarComponent,
        BackButtonComponent,
        CapsuleComponent,
        CardAccountHistoryComponent,
        CardAccountHistoryGroupComponent,
        GraphDisplayValueComponent,
        ModalIconComponent,
        Button2Component,
        CardAccountTypeAComponent
      ],
      imports: [
        NgbModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        ParametroService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
