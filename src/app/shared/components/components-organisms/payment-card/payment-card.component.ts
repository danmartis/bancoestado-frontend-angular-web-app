import { Component, OnInit, Input } from '@angular/core';
import { registeredPaymentMethods, changePaymentMethodList } from 'src/app/shared/utils/mock-data';
import { PaymentMethod } from 'src/app/shared/utils/types';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  @Input() method : PaymentMethod;

  protected changePaymentMethodList : Array <PaymentMethod> = changePaymentMethodList;
  constructor(protected modalService:ModalService) { }

  ngOnInit() {
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  getMethod() {
    return this.method;
  }

  getPrimaryRegisteredPaymentMethod() : PaymentMethod {
    return registeredPaymentMethods.find(method => method.primary);
  }

  getMethodImg() {
    return `assets/imgs/payments/${this.getPrimaryRegisteredPaymentMethod().type}.png`;
  }
}
