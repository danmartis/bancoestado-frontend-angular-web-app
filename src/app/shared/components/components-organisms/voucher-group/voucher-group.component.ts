import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { formatNumber, session, emailValidate, isSpecialCharacterEmail } from 'src/app/shared/utils/utils';
import { ParametroService } from '../../../../domain/parametro.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ModalService } from 'src/app/services/modal.service';
import { colors, PaymentAccountAndGroupStatus } from 'src/app/shared/utils/options';
import { ComprobanteService } from 'src/app/services/comprobante.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voucher-group',
  templateUrl: './voucher-group.component.html',
  styleUrls: ['./voucher-group.component.scss']
})
export class VoucherGroupComponent implements OnInit, AfterViewInit {

  protected total: number = 0;
  @Input() data: any;
  public canvasComprobante: HTMLCanvasElement;
  public correoCliente: string = '';
  public isCorreoValid: boolean = false;
  public checkCorreo: boolean = false;
  public buttonDisabled: boolean = true;
  @Input() mostrarModalEnvio: string = '1';
  protected checkColor = colors[PaymentAccountAndGroupStatus.Success];

  constructor(private parametroService: ParametroService, 
    protected modalService: ModalService,
    private comprobanteService: ComprobanteService,
    private router: Router) { }
    
  ngOnInit() {
  }
  
  ngAfterViewInit() {
    console.log('AfterViewInit');
    setTimeout(() => {
      this.convertPageToCanvas().then((canvas) => {
        this.canvasComprobante = canvas;
        console.log(this.canvasComprobante);
      }).catch((error) => {
        console.log(error);
      });
    }, 100);
    console.log('mostrarModalEnvio:', this.mostrarModalEnvio);
    if (this.mostrarModalEnvio && this.mostrarModalEnvio == '1') {
      this.mostrarModalEnvioComprobante();
    }
  }

  getValue(): string {
    return formatNumber(this.data.value);
    //return this.parametroService.getParametro('totalPagar');
  }

  getPaymentOrigin() {
    return 'Cuenta RUT N° 16751256';
  }

  convertPageToCanvas(): Promise<HTMLCanvasElement> {
    const y = window.pageYOffset;
    const x = window.pageXOffset;
    const promise = new Promise<HTMLCanvasElement>((resolve, reject) => {
      // Obtenemos element html
      const data: HTMLElement = (document.body.querySelector('#contentToConvert') as HTMLElement);
      // Configuraciones de scroll
      window.scrollTo(0, 0);
      // Obtenemos un canvas desde el hmtl
      html2canvas(data, { scrollX: 0, scrollY: 0, logging: false })
        .then((canvas: HTMLCanvasElement) => {
          // console.log('canvas:', canvas);
          resolve(canvas);
        })
        .catch((error) => {
          reject(error);
        });
    });
    // Dejamos el scroll como estaba al inicio
    window.scrollTo(x, y);
    return promise;
  }

  downloadComprobantePDF(imgWidth?: number, coordinateTop?: number, coordinateLeft?: number, contentDataURLBase64?: string, imageAlias?: string) {
    try {
      // Configuracion imagen
      const imageWidth = imgWidth != undefined ? imgWidth : 130;
      const imageHeight = this.canvasComprobante.height * imageWidth / this.canvasComprobante.width;
      const compression = 'SLOW';
      const alias = imageAlias != undefined ? imageAlias : 'comprobante';
      // Obtenemos la imagen en Base64
      const contentDataURL = contentDataURLBase64 != undefined ?  contentDataURLBase64 : this.canvasComprobante.toDataURL('image/png');
      // Instanciamos una hoja A4 para PDF
      let pdf = new jsPDF('p', 'mm', 'a4');
      // Coordenadas
      const coordinate = { top: coordinateTop != undefined ? coordinateTop : 20, left: coordinateLeft != undefined ? coordinateLeft : 40 };
      // Agregar imagen
      pdf.addImage(contentDataURL, 'JPG', coordinate.left, coordinate.top, imageWidth, imageHeight, alias, compression);
      pdf.save('ComprobantePago.pdf');
    } catch (error) {
      console.log('Error al generar PDF:', error);
    }
  }

  sharingComprobantePNG() {
    try {
      const generatedImage = this.canvasComprobante.toDataURL("image/png"); //.replace("image/png", "image/octet-stream");
      let navigator: any = window.navigator;
      // console.log('navigator:', navigator);
      // console.log('navigator.canShare:', navigator.canShare);
      const text = 'Comprobante de Pago';
      const fileName = 'ComprobantePago.png';
      let data = { files: [], text: text, title: text };
      const options = { type: "image/png" };
      if (navigator.canShare) {
        const image = this.dataURLtoFile(generatedImage, fileName);
        let blob = new File([image], fileName, options);
        data.files.push(blob);
        // console.log('data:', data);
        navigator.share(data)
          .then(() => { })
          .catch((error) => {
            console.log('No fue posible compartir archivos', error);
          });
      } else {
        console.log('El sistema no soporta compartir archivos');
        this.downloadComprobantePDF(60, 15, 75, generatedImage);
      }
    } catch (error) {
      console.log('Error al compartir imagen:', error);
    }
  }

  dataURLtoFile(dataurl: string, filename: string) {
    try {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    } catch (error) {
      console.log('Error al generar archivo:', error);
    }
  }

  validateEmail(email: string) {
    this.isCorreoValid = emailValidate(email);
    if (!!this.isCorreoValid) {
      this.buttonDisabled = false;
    } else if (!this.isCorreoValid && !this.checkCorreo) {
      this.buttonDisabled = true;
    }
  }

  validateKeySpecial(event: KeyboardEvent) {
    return isSpecialCharacterEmail(event.key);
  }

  handlerChangeEmail(text: string) {
    this.correoCliente = text;
  }

  mostrarModalEnvioComprobante() {
    if (session.showMessageEmailClient()) {
      setTimeout(() => {
        this.modalService.closeListOpenSingle([], 'modal__method-payment-01');
      }, 100);
    }
  }

  pressButtonAceptar() {
    if (!!this.isCorreoValid && !!this.checkCorreo) {
      this.enviarComprobante();
      session.notShowMessageEmailClient();
      this.modalService.closeListOpenSingle(['modal__method-payment-01'], '');
    } else if (!!this.isCorreoValid && !this.checkCorreo) {
      this.enviarComprobante();
      this.modalService.closeListOpenSingle(['modal__method-payment-01'], '');
    } else if (!this.isCorreoValid && !!this.checkCorreo) {
      session.notShowMessageEmailClient();
      this.modalService.closeListOpenSingle(['modal__method-payment-01'], '');
    }
  }

  enviarComprobante() {
    if (this.isCorreoValid) {
      let idTransaccion = undefined;
      console.log('data:', this.data);
      for (let detail of this.data.detail) {
        if (detail.name.toLowerCase().includes('operaci')) {
          idTransaccion = detail.value;
        }
      }
      console.log('idTransaccion:', idTransaccion);
      const body = { idTransaccion: idTransaccion, correo: this.correoCliente }; 
      this.comprobanteService.sendComprobante(body).subscribe((res) => {
        console.log('Correo programado satisfactoriamente', res);
      });
    }
  }

  getIconColorContextMenu() {
    return (true) ? colors.default : colors.secondary;
  }

  pressCheckCorreo() {
    this.checkCorreo = !this.checkCorreo;
    if (!!this.checkCorreo) {
      this.buttonDisabled = false;
    } else if (!this.checkCorreo && !this.isCorreoValid) {
      this.buttonDisabled = true;
    }
  }
  
  goToHome() {
    this.parametroService.deleteParametro('carruselCtas');
    this.router.navigate(['home-account/home']);
  }

}
