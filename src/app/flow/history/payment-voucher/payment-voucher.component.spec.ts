import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentVoucherComponent } from './payment-voucher.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { ShowMoreComponent } from 'src/app/shared/components/components-atom/show-more/show-more.component';
import { CardAccountDetailComponent } from 'src/app/shared/components/card-account-detail/card-account-detail.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { BackButtonComponent } from 'src/app/shared/components/components-atom/back-button/back-button.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainTitleComponent } from 'src/app/shared/components/components-atom/main-title/main-title.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from 'src/app/domain/parametro.service';
import { CardAccountHistoryComponent } from 'src/app/shared/components/accounts/card-account-history/card-account-history.component';
import { CardAccountHistoryGroupComponent } from 'src/app/shared/components/accounts/card-account-history-group/card-account-history-group.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';

describe('PaymentsComponent', () => {
  let component: PaymentVoucherComponent;
  let fixture: ComponentFixture<PaymentVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PaymentVoucherComponent,
        FooterDefaultComponent,
        PageComponent,
        ShowMoreComponent,
        CardAccountDetailComponent,
        CardDefaultComponent,
        InputComponent,
        PageTitleComponent,
        BackButtonComponent,
        HeaderMainComponent,
        MainTitleComponent,
        BackButtonPageComponent,
        ButtonComponent,
        IconComponent,
        ParagraphComponent,
        CheckboxComponent,
        ButtonComponent,
        SidebarComponent,
        CapsuleComponent,
        CardAccountHistoryComponent,
        CardAccountHistoryGroupComponent,
        Button2Component
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
    fixture = TestBed.createComponent(PaymentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('getIconDetail first', () => {
    const sec = 'first';
    component.getIconDetail(sec);
    expect(component).toBeTruthy();
  });

  it('getIconDetail second', () => {
    const sec = 'second';
    component.getIconDetail(sec);
    expect(component).toBeTruthy();
  });

  it('getStatusDetail first', () => {
    const sec = 'first';
    component.getStatusDetail(sec);
  });

  it('getStatusDetail second', () => {
    const sec = 'second';
    component.getStatusDetail(sec);
  });

  it('toggleDetail first', () => {
    const sec = 'first';
    component.toggleDetail(sec);
    expect(component).toBeTruthy();
  });

  it('toggleDetail second', () => {
    const sec = 'second';
    component.toggleDetail(sec);
    expect(component).toBeTruthy();
  });

  it('formatNumber', () => {
    const n = 123;
    component.formatNumber(n);
    expect(component).toBeTruthy();
  });

  it('haUnregistered', () => {
    component.haUnregistered();
    expect(component).toBeTruthy();
  });
});
