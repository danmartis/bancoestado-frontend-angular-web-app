import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymentAccount } from 'src/app/shared/utils/types';
import { getIsNotNullDate, getIsNotNull, formatNumber, getIconByName, containText } from 'src/app/shared/utils/utils';
import { colorsAccount, iconAccount, colors, OptionsGroup } from 'src/app/shared/utils/options';
import { ActivatedRoute, Router } from "@angular/router";
import { ParametroService } from '../../../domain/parametro.service';

@Component({
  selector: 'app-card-account-detail',
  templateUrl: './card-account-detail.component.html',
  styleUrls: ['./card-account-detail.component.scss']
})
export class CardAccountDetailComponent implements OnInit {
  
  @Input() type : 'proof-payment' | 'account' | '' | 'in-group' | 'only-display';
  @Input() account : PaymentAccount;
  @Output() openEditAccount = new EventEmitter<any>();

  colorSecondaryLight = colors.secondaryLight;
  
  showGroupDetail : boolean = false;
  comprobante : any ;

  constructor(private router : Router, private parametroService: ParametroService) { 
    this.parametroService.deleteParametro('comprobanteRespaldo');
  }

  iconColor : string = colors.active;
  ngOnInit() {
  }

  getIsNotNullDate(obj, prop) {
    return getIsNotNullDate(obj, prop);
  }
  
  getColor() {
    if (this.account.group !== undefined && this.account.group !== '') {
      return colorsAccount.historyGroupDefault;
    }
    if (this.account) {
      return colorsAccount[getIsNotNull(this.account, 'type')];
    }
    return '';
  }

  getIcon() {
    if (this.account.group !== undefined && this.account.group !== '') {
      // this.account.group
      const img = getIconByName(OptionsGroup.HistoryGroupDefault).imgAlt;
      return img;
    }

    if (this.account) {
      return iconAccount[getIsNotNull(this.account, 'type')];
    }
    return '';
  }

  openEdit() {
    this.openEditAccount.emit();
  }

  getValue() {
    return formatNumber(this.account.value);
  }

  formatNumber(v : any) {
    return formatNumber(v);
  }

  isInfo() : boolean {
    return containText(this.account.info)
  }

  getInfoColor() {
    return colors[this.account.info];
  }

  // GROUP
  isGroup() : boolean {
    return containText(this.account.group);
  }

  toggleGroupDetail() {
    this.showGroupDetail = !this.showGroupDetail;
  }

  yesOrNotGroupDetail(y : string, n : string) {
    return this.showGroupDetail ? y : n;
  }
  
  goToDetail() {
    let comprobanteUnique = [];
    this.comprobante = this.parametroService.getParametro('comprobante');
    for (let i = 0; i < this.comprobante.comprobante[0].detalle.length; i++){
        if (this.account.uniqueId == this.comprobante.comprobante[0].detalle[i].correlativo) {
          comprobanteUnique = [{
            idTransaccion: this.comprobante.comprobante[0].idTransaccion,
            montoTotalPagado: this.comprobante.comprobante[0].detalle[i].montoPagado,
            cuentaPago: this.comprobante.comprobante[0].cuentaPago,
            nroDocumentos: this.comprobante.comprobante[0].nroDocumentos,
            fecha: this.comprobante.comprobante[0].fecha,
            hora: this.comprobante.comprobante[0].hora,
            servicio: this.comprobante.comprobante[0].servicio,
            detalle: [this.comprobante.comprobante[0].detalle[i]]
          }]
        }
    }
    // console.log('comprobanteUnique',comprobanteUnique);
    // Fix comprobante multiple, homologacion de mostrar comprobante
    const comprobante = { comprobante: comprobanteUnique }
    console.log('comprobante detalle:', comprobante);
    this.parametroService.addParametro('comprobanteRespaldo',this.parametroService.getParametro('comprobante'));
    this.parametroService.deleteParametro('comprobante');
    this.parametroService.addParametro('comprobante',comprobante);

    this.router.navigate(['payment/proof-payment'],{ queryParams: { retorno: 1, mostrarModalEnvio: 0 }});
  }
}
