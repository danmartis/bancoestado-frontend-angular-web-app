import { Component, OnInit } from '@angular/core';
import { Voucher } from 'src/app/shared/utils/types';
import { voucherSingle } from 'src/app/shared/utils/mock-data';

import { ActivatedRoute, Router } from "@angular/router";
import { ParametroService } from '../../../domain/parametro.service';

@Component({
  selector: 'app-proof-payment',
  templateUrl: './proof-payment.component.html',
  styleUrls: ['./proof-payment.component.scss']
})
export class ProofPaymentComponent implements OnInit {

  //protected dataSingle : Voucher  = voucherSingle;
  protected dataSingle: Voucher;
  public retorno : any
  public mostrarModalEnvio : string;

  constructor(private router: Router, private parametroService: ParametroService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.retorno = params['retorno'];
        this.mostrarModalEnvio = (params['mostrarModalEnvio']) ? params['mostrarModalEnvio'] : '1';
        console.log('retornoooo',this.retorno);
    });
    console.log('comprobanteRespaldooooo',this.parametroService.getParametro('comprobanteRespaldo'));
    this.mostrarComprobante(this.parametroService.getParametro('comprobante'));
  }

  goToHome() {
    this.parametroService.deleteParametro('carruselCtas');
    console.log('retornoooo', this.retorno);
    if (this.retorno == 1) {
      this.parametroService.addParametro('comprobante',this.parametroService.getParametro('comprobanteRespaldo')); 
      this.router.navigate(['payment/proof-payment-group'], { queryParams: { mostrarModalEnvio: 0 }});
    } else {
      this.router.navigate(['home-account/home']);
    }
  }

  mostrarComprobante(comprobante) {
    console.log('comprobante:', comprobante);
    console.log('comprobante.comprobante[0]:', comprobante.comprobante[0]);
    console.log('comprobante.comprobante.lenght:', comprobante.comprobante.length)
    if (comprobante && comprobante.comprobante.length > 0) {
      this.dataSingle = {
        isSingle: true,
        value: comprobante.comprobante[0].montoTotalPagado,
        detailSingleImage: 'assets/imgs/movistar.jpg',
        from: 'Cuenta RUT N° ' + comprobante.comprobante[0].cuentaPago,
        accounts: [{
          clientNumber: "ADG 234 3U",
          title: "Chilectra",
          value: 120214,
          uniqueId: 12,
          expire: new Date('02/02/2020'),
          selected: true,
          textStatus: 'Deuda Vencida',
          status: 'Warning',
          type: 'Electrical',
          fees: false,
          expirePayment: 1000,
        }],
        detail: [{
          name: 'Nº de cliente',
          value: comprobante.comprobante[0].detalle[0].idCliente,
        },
        {
          name: 'Nombre / Alias',
          value: comprobante.comprobante[0].detalle[0].nombreAlias,
        },
        {
          name: 'Servicio',
          value: comprobante.comprobante[0].detalle[0].servicio,
        },
        {
          name: 'Código de Autorización',
          value: comprobante.comprobante[0].idTransaccion,
        },
        {
          name: 'N° de Operación',
          value: comprobante.comprobante[0].detalle[0].nroDocumento,
        },
        {
          name: 'Fecha',
          value: comprobante.comprobante[0].fecha,
        },
        {
          name: 'Hora',
          value: comprobante.comprobante[0].hora,
        }
        ],
        message: 'El pago de tu cuenta se realizó con éxito',
      }
    }
    else {
      this.router.navigate(['home-account/home']);
    }
  }
}
