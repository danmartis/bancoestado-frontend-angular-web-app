import { Component, OnInit } from '@angular/core';
import { registeredPaymentMethods } from 'src/app/shared/utils/mock-data';
import { PaymentMethod } from 'src/app/shared/utils/types';

@Component({
  selector: 'app-registered-payment-methods',
  templateUrl: './registered-payment-methods.component.html',
  styleUrls: ['./registered-payment-methods.component.scss']
})
export class RegisteredPaymentMethodsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPrimaryRegisteredPaymentMethod() : PaymentMethod {
    return registeredPaymentMethods.find(method => method.primary);
  }

  getMethod() : PaymentMethod {
    return this.getPrimaryRegisteredPaymentMethod();
  }

}
