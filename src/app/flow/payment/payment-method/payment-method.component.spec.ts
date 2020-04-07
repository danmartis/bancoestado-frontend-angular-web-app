import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodComponent } from './payment-method.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { CardMethodPaymentComponent } from 'src/app/shared/components/card-method-payment/card-method-payment.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { RadioComponent } from 'src/app/shared/components/components-atom/radio/radio.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from 'src/app/domain/parametro.service';
import { ComprobanteService } from '../../../services/comprobante.service';
import { ComprobanteServiceMock } from '../../../services/comprobante.service.spec';
import { ModalIconComponent } from 'src/app/shared/components/modal-icon/modal-icon.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('PaymentMethodComponent', () => {
  let component: PaymentMethodComponent;
  let fixture: ComponentFixture<PaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PaymentMethodComponent,
        CapsuleComponent,
        FooterDefaultComponent,
        PageComponent,
        ModalComponent,
        ButtonComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ImageComponent,
        ModalComponent,
        CheckboxComponent,
        InputComponent,
        CardMethodPaymentComponent,
        PageTitleComponent,
        BackButtonPageComponent,
        HeaderMainComponent,
        IconComponent,
        RadioComponent,
        SidebarComponent,
        Button2Component,
        ModalIconComponent,
        DropdownComponent
      ],
      imports : [
        RouterTestingModule,
        NgbModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ParametroService, useClass: ParametroServiceMock },
        { provide: ComprobanteService, useClass: ComprobanteServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isLogin', () => {
    component.isLogin();
  });

  it('isLogout', () => {
    component.isLogout();
  });

  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
    expect(component).toBeTruthy();
  });

  it('goToHome', () => {
    const router: Router = TestBed.get(Router);
    spyOn(router, 'navigate');
    component.goToHome();
    expect(router.navigate).toHaveBeenCalledWith(['home-account/home']);

  });

  it('goToProofPayment', () => {
    component.goToProofPayment();
  });

});

export class ParametroServiceMock {
  mapParametros = new Map<string, any>();
  public addParametro(key: string, valor: any): void {
    this.mapParametros.set(key, valor);
  }
  public getParametro(key: string): any {
    const carruselCtas : any =  [{
          "clientNumber" : "18561760-0",
          "counter": 1,
          "expirePayment": 2000,
          "fullPayment": 9900,
          "title": "Movistar",
          "type": "teleco",
          "uniqueId":-1,
          "value":9900
      }];
    return carruselCtas;
  }
  public deleteParametro(key: string): void {

  }
}