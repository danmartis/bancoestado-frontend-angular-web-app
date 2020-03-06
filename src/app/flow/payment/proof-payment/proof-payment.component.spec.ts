import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofPaymentComponent } from './proof-payment.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { VoucherGroupComponent } from 'src/app/shared/components/components-organisms/voucher-group/voucher-group.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { CardVoucherComponent } from 'src/app/shared/components/card-voucher/card-voucher.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { CardAccountDetailComponent } from 'src/app/shared/components/card-account-detail/card-account-detail.component';
import { MessagePaymentComponent } from 'src/app/shared/components/message-payment/message-payment.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from '../../../domain/parametro.service';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';

describe('ProofPaymentComponent', () => {
  let component: ProofPaymentComponent;
  let fixture: ComponentFixture<ProofPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProofPaymentComponent,
        FooterDefaultComponent,
        PageComponent,
        VoucherGroupComponent,
        BackButtonPageComponent,
        HeaderMainComponent,
        ButtonComponent,
        CardVoucherComponent,
        ParagraphComponent,
        CardAccountDetailComponent,
        MessagePaymentComponent,
        IconComponent,
        SidebarComponent,
        CardDefaultComponent,
        CheckboxComponent,
        CapsuleComponent,
        ImageComponent,
        ModalTitleComponent,
        InputComponent,
        ModalComponent,
      ],
      imports: [
        NgbModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ParametroService, useClass: ParametroServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('goToHome', () => {
    component.goToHome();
  });
});

export class ParametroServiceMock {
  mapParametros = new Map<string, any>();
  public addParametro(key: string, valor: any): void {
    this.mapParametros.set(key, valor);
  }
  public getParametro(key: string): any {
    const comprobante : any = 
      {
        comprobante : [{
          "idTransaccion" : 135792468,
          "montoTotalPagado": 9990,
          "cuentaPago": 18362578,
          "nroDocumentos": 1,
          "fecha": "",
          "hora": "",
          "detalle": [
            {
              "idCliente": "185617600",
              "nombreAlias": "Usuario Serviestado",
              "empresa": "Movistar",
              "servicio": "Movistar Hogar",
              "nroDocumento": 99969999,
              "montoPagado": 9990,
              "correlativo": 1
            }
          ]
      }]};
    return comprobante;
  }
  public deleteParametro(key: string): void {

  }
}
