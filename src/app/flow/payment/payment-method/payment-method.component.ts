import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ActivatedRoute, Router } from "@angular/router";
import { session } from 'src/app/shared/utils/utils';
import { paymentMethodList } from 'src/app/shared/utils/mock-data';
import { PaymentBank } from 'src/app/shared/utils/types';

import { ParametroService } from '../../../domain/parametro.service';
import { PaymentAccount } from 'src/app/shared/utils/types';

import { ComprobanteService } from '../../../shared/services/comprobante.service';
import { comprobante } from '../../../domain/comprobante.class';
import { colors, PaymentAccountAndGroupStatus } from 'src/app/shared/utils/options';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  protected paymentMethodList: Array<PaymentBank> = paymentMethodList;
  public montoPagar: number;
  public ctas: Array<PaymentAccount> = [];
  public comprobante: any = [];
  public idComprobante: number = 0;

  protected checkColor = colors[PaymentAccountAndGroupStatus.Success];

  constructor(
    private route: ActivatedRoute,
    protected modalService: ModalService,
    private router: Router,
    private parametroService: ParametroService,
    private comprobanteService : ComprobanteService
  ) {
    this.parametroService.deleteParametro('comprobante');
  }

  ngOnInit() {
    this.montoPagar = this.parametroService.getParametro('totalPagar');
    this.parametroService.deleteParametro('totalPagar');
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  goToProofPayment() {

    this.ctas = this.parametroService.getParametro('carruselCtas');
    console.log('goToProofPayment', this.ctas);
    if(this.ctas.length == 1){
      this.idComprobante = 135792468;
    }else if (this.ctas.length > 1 ) {
      this.idComprobante = 135792469;
    }

    console.log('this.idComprobante', this.idComprobante);
    this.comprobanteService.comprobante(this.idComprobante).subscribe(resComprobante => {
      console.log('resComprobante', resComprobante.getDetalle().comprobante[0].nroDocumentos, resComprobante.getDetalle());
      // console.log('resComprobanteDoc:', resComprobante.getDetalle().comprobante[0].nroDocumentos);
      // console.log('resComprobante:', resComprobante.getDetalle().comprobante);
      this.parametroService.addParametro('comprobante',resComprobante.getDetalle());
      
      if(resComprobante.getDetalle().comprobante[0].nroDocumentos == 1) {
        this.router.navigate(['payment/proof-payment']);
        this.modalService.closeListOpenSingle(['modal__method-payment-02'], '');
      }
      else if (resComprobante.getDetalle().comprobante[0].nroDocumentos > 1 ) {
        this.router.navigate(['payment/proof-payment-group']);
        this.modalService.closeListOpenSingle(['modal__method-payment-02'], '');
      }
      
      //this.comprobante = resComprobante.getDetalle().convenios;
    });


  /*  this.ctas = this.parametroService.getParametro('carruselCtas');
    console.log('ctas.lenght', this.ctas.length);
    if(this.ctas.length == 1) {
      this.router.navigate(['payment/proof-payment']);
      this.modalService.closeListOpenSingle(['modal__method-payment-02'], '');
    }
    else if (this.ctas.length >= 1 ) {
      this.router.navigate(['payment/proof-payment-group']);
      this.modalService.closeListOpenSingle(['modal__method-payment-02'], '');
    }*/
  }

  isLogin() {
    return session.isLogin();
  }
  isLogout() {
    return session.isLogout();
  }

  goToHome() {
    this.router.navigate(['home-account/home']);
  }
}
