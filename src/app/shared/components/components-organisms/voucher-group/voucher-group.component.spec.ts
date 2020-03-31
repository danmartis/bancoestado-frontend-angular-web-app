import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherGroupComponent } from './voucher-group.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { CardVoucherComponent } from '../../card-voucher/card-voucher.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { CardAccountDetailComponent } from '../../card-account-detail/card-account-detail.component';
import { MessagePaymentComponent } from '../../message-payment/message-payment.component';
import { CardDefaultComponent } from '../../components-atom/card-default/card-default.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { CheckboxComponent } from '../../components-atom/checkbox/checkbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParametroService } from '../../../../domain/parametro.service';
import { ImageComponent } from '../../components-atom/image/image.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { InputComponent } from '../../components-atom/input/input.component';
import { ModalComponent } from '../modal/modal.component';
import { ComprobanteService } from 'src/app/services/comprobante.service';
import { ComprobanteServiceMock } from 'src/app/services/comprobante.service.spec';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Button2Component } from '../../button/button2/button2.component';
import { ModalIconComponent } from '../../modal-icon/modal-icon.component';
import { Router } from '@angular/router';

describe('VoucherGroupComponent', () => {
  let component: VoucherGroupComponent;
  let fixture: ComponentFixture<VoucherGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoucherGroupComponent,
        ButtonComponent,
        CardVoucherComponent,
        ParagraphComponent,
        CardAccountDetailComponent,
        MessagePaymentComponent,
        CardDefaultComponent,
        IconComponent,
        CheckboxComponent,
        ImageComponent,
        ModalTitleComponent,
        InputComponent,
        ModalComponent,
        Button2Component,
        ModalIconComponent
      ],
      imports: [
        NgbModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        ParametroService, { provide: ComprobanteService, useClass: ComprobanteServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherGroupComponent);
    component = fixture.componentInstance;
    component.data = {
      isSingle: true,
      message: "El pago de tu cuenta se realizó con éxito",
      ddetailSingleImage: "assets/imgs/empresalogos/enel.png",
      value: 9990,
      from: "Cuenta RUT N° 18362578",
      detail: [{
        name: "Nº de cliente",
        value: "185617600",
      }],
      accounts: [{
        clientNumber: "ADG 234 3U",
        expire: "",
        expirePayment: 1000,
        fees: false,
        selected: true,
        status: "Warning",
        textStatus: "Deuda Vencida",
        title: "Chilectra",
        type: "Electrical",
        uniqueId: 12,
        value: 120214,
      }]
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getPaymentOrigin', () => {
    component.getPaymentOrigin();
  });

  it('ngAfterViewInit', () => {
    component.ngAfterViewInit();
  });

  it('convertPageToCanvas', async () => {
    // var html2canvas = html2canvasWrong as any as (element: HTMLElement, options?: Partial<html2canvasWrong.Options>) => Promise<HTMLCanvasElement>;
    component.convertPageToCanvas().then((canvas) => {
      console.log(canvas);
      expect(canvas).toBeTruthy();
    });
  });

  it('downloadComprobantePDF', () => {
    component.convertPageToCanvas().then((canvas) => {
      component.canvasComprobante = canvas;
      component.downloadComprobantePDF();
    });
  });
  it('sharingComprobantePNG', () => {
    component.convertPageToCanvas().then((canvas) => {
      component.canvasComprobante = canvas;
      component.sharingComprobantePNG();
    });
  });

  it('dataURLtoFile', () => {
    component.convertPageToCanvas().then((canvas) => {
      const imagenBase64 = canvas.toDataURL();
      expect(component.dataURLtoFile(imagenBase64, 'comprobante.png')).toBeTruthy();
    });
  });

  it('validateEmail', () => {
    expect(component.validateEmail('jperez@bancoestado.cl'));
  });

  it('validateKeySpecial', () => {
    const event = new KeyboardEvent('keypress', { code: 'Q', key: 'Q' });
    console.log('Evento key:', event.key);
    expect(component.validateKeySpecial(event)).toEqual(true);
  });

  it('mostrarModalEnvioComprobante', () => {
    expect(component.mostrarModalEnvioComprobante());
  });

  it('pressButtonAceptar', () => {
    component.isCorreoValid = true;
    component.checkCorreo = true;
    expect(component.pressButtonAceptar());
  });

  it('enviarComprobante', () => {
    component.isCorreoValid = true;
    component.enviarComprobante();
  });

  it('pressCheckCorreo', () => {
    component.pressCheckCorreo();
  });

  it('goToHome', () => {
   

    const router: Router = TestBed.get(Router);
    spyOn(router, 'navigate');
    component.goToHome();

    expect(router.navigate).toHaveBeenCalledWith(['home-account/home']);

  });

});
