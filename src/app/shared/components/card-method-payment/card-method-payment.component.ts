import { Component, OnInit, Input } from '@angular/core';
import { PaymentMethod } from 'src/app/shared/utils/types';
import { colors, PaymentAccountAndGroupStatus, PaymentMethodType } from 'src/app/shared/utils/options';

@Component({
  selector: 'app-card-method-payment',
  templateUrl: './card-method-payment.component.html',
  styleUrls: ['./card-method-payment.component.scss']
})
export class CardMethodPaymentComponent implements OnInit {

  @Input() type : '' | 'selected' = '';
  @Input() method : PaymentMethod = null;

  protected checkColor = colors[PaymentAccountAndGroupStatus.Success];

  constructor() { }

  ngOnInit() {

  }

  getIconColorContextMenu() {
    return this.method.primary ? colors.default : colors.secondary;
  }

  isCompanyMethod() {
    return this.method.type === PaymentMethodType.BancoEstado;
  }

}
