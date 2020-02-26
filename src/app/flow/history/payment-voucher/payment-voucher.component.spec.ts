import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentVoucherComponent } from './payment-voucher.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { ShowMoreComponent } from 'src/app/components/components-atom/show-more/show-more.component';
import { CardAccountDetailComponent } from 'src/app/components/card-account-detail/card-account-detail.component';
import { CardDefaultComponent } from 'src/app/components/components-atom/card-default/card-default.component';
import { InputComponent } from 'src/app/components/components-atom/input/input.component';
import { PageTitleComponent } from 'src/app/components/components-atom/page-title/page-title.component';
import { BackButtonComponent } from 'src/app/components/components-atom/back-button/back-button.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainTitleComponent } from 'src/app/components/components-atom/main-title/main-title.component';
import { BackButtonPageComponent } from 'src/app/components/components-atom/back-button-page/back-button-page.component';
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { IconComponent } from 'src/app/components/components-atom/icon/icon.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { CheckboxComponent } from 'src/app/components/components-atom/checkbox/checkbox.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from 'src/app/domain/parametro.service';

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
        CapsuleComponent
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
  });

  it('getIconDetail second', () => {
    const sec = 'second';
    component.getIconDetail(sec);
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
  });

  it('toggleDetail second', () => {
    const sec = 'second';
    component.toggleDetail(sec);
  });

  it('formatNumber', () => {
    const n = 123;
    component.formatNumber(n);
  });

  it('haUnregistered', () => {
    component.haUnregistered();
  });
});
