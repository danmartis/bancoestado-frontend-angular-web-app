import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofPaymentGroupComponent } from './proof-payment-group.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { VoucherGroupComponent } from 'src/app/components/components-organisms/voucher-group/voucher-group.component';
import { BackButtonPageComponent } from 'src/app/components/components-atom/back-button-page/back-button-page.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { CardAccountDetailComponent } from 'src/app/components/card-account-detail/card-account-detail.component';
import { MessagePaymentComponent } from 'src/app/components/message-payment/message-payment.component';
import { CardVoucherComponent } from 'src/app/components/card-voucher/card-voucher.component';
import { IconComponent } from 'src/app/components/components-atom/icon/icon.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CardDefaultComponent } from 'src/app/components/components-atom/card-default/card-default.component';
import { CheckboxComponent } from 'src/app/components/components-atom/checkbox/checkbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from '../../../domain/parametro.service';
import { InputComponent } from 'src/app/components/components-atom/input/input.component';
import { ModalComponent } from 'src/app/components/components-organisms/modal/modal.component';
import { ModalTitleComponent } from 'src/app/components/components-atom/modal-title/modal-title.component';
import { ImageComponent } from 'src/app/components/components-atom/image/image.component';

describe('ProofPaymentGroupComponent', () => {
  let component: ProofPaymentGroupComponent;
  let fixture: ComponentFixture<ProofPaymentGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProofPaymentGroupComponent,
        FooterDefaultComponent,
        PageComponent,
        VoucherGroupComponent,
        BackButtonPageComponent,
        HeaderMainComponent,
        ButtonComponent,
        ParagraphComponent,
        CardAccountDetailComponent,
        MessagePaymentComponent,
        CardVoucherComponent,
        IconComponent,
        SidebarComponent,
        CardDefaultComponent,
        CheckboxComponent,
        CapsuleComponent,
        InputComponent,
        ModalComponent,
        ModalTitleComponent,
        ImageComponent
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
    fixture = TestBed.createComponent(ProofPaymentGroupComponent);
    component = fixture.componentInstance;
    component.data = {
      isSingle: true,
      detail: [{
        name: "Nº de cliente",
        value: "185617600",
      }],
      message: "El pago de tu cuenta se realizó con éxito",
      value: 9990,
      from: "Cuenta RUT N° 18362578"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
