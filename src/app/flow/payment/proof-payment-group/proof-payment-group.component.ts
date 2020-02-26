import { Component, OnInit } from '@angular/core';
import { voucherGroup } from 'src/app/shared/utils/mock-data';
import { Voucher } from 'src/app/shared/utils/types';
import { PaymentAccount } from 'src/app/shared/utils/types';

import { Router, ActivatedRoute } from '@angular/router';
import { ParametroService } from '../../../domain/parametro.service';
import { OptionsAccountEnum } from 'src/app/shared/utils/options';

@Component({
  selector: 'app-proof-payment-group',
  templateUrl: './proof-payment-group.component.html',
  styleUrls: ['./proof-payment-group.component.scss']
})
export class ProofPaymentGroupComponent implements OnInit {

  // protected data : Voucher  = voucherGroup;
  public data: Voucher;
  protected dataDetalle: Array<PaymentAccount> = [];;
  public comprobante: any;
  public detalleComprobante: any = [];
  public mostrarModalEnvio: string;

  constructor(private router: Router, 
              private parametroService: ParametroService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
        this.mostrarModalEnvio = (params['mostrarModalEnvio']) ? params['mostrarModalEnvio'] : '1';
    });
    this.comprobante = this.parametroService.getParametro('comprobante');
    this.detalleComprobante = [];
    if (this.comprobante) {
      this.detalleComprobante = this.comprobante.comprobante[0].detalle;
      this.mostrarComprobante(this.comprobante, this.detalleComprobante);
    }
    else {
      this.router.navigate(['home-account/home']);
    }
  }

  mostrarComprobante(resumenComprobante, detalleComprobante) {
    console.log('resumenComprobante:', resumenComprobante);
    console.log('resumenComprobante:', resumenComprobante.comprobante[0].montoTotalPagado);
    console.log('detalleComprobante:', detalleComprobante);
    for (let i = 0; i < detalleComprobante.length; i++) {
      let detalle = {
        clientNumber: detalleComprobante[i].idCliente,
        title: detalleComprobante[i].empresa,
        value: detalleComprobante[i].montoPagado,
        uniqueId: detalleComprobante[i].correlativo,
        expire: new Date(resumenComprobante.comprobante[0].fecha),
        selected: true,
        textStatus: 'Deuda Vencida',
        status: '',
        type: OptionsAccountEnum.Teleco,
        fees: false,
        expirePayment: 1000
      }
      this.dataDetalle.push(detalle);
      console.log('detalle', detalle);
    }
    this.data = {
      isSingle: false,
      value: resumenComprobante.comprobante[0].montoTotalPagado,
      from: 'Cuenta RUT N° ' + resumenComprobante.comprobante[0].cuentaPago,
      accounts: this.dataDetalle,
      detail: [{
        name: 'Codigo Transaccion',
        value: resumenComprobante.comprobante[0].idTransaccion,
      },
      /*{
        name: 'Servicio',
        value: resumenComprobante.comprobante[0].servicio,
      },*/
      {
        name: 'Fecha',
        value: resumenComprobante.comprobante[0].fecha,
      },
      {
        name: 'Hora',
        value: resumenComprobante.comprobante[0].hora,
      }
      ],
      message: 'El pago de tus cuentas se realizó con éxito',
    };
    console.log('data:', this.data);
  }

  goToHome() {
    this.router.navigate(['home-account/home']);
  }
}
