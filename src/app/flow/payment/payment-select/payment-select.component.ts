import { Component, OnInit } from '@angular/core';
import { selectPaymentMethodOtherBank, selectPaymentMethodBancoEstado } from 'src/app/shared/utils/mock-data';
import { PaymentMethod } from 'src/app/shared/utils/types';

@Component({
  selector: 'app-payment-select',
  templateUrl: './payment-select.component.html',
  styleUrls: ['./payment-select.component.scss']
})
export class PaymentSelectComponent implements OnInit {

  protected methodBancoEstado: Array <PaymentMethod> = selectPaymentMethodBancoEstado;
  protected methodOtherBank: Array <PaymentMethod> = selectPaymentMethodOtherBank;

  constructor() { }

  ngOnInit() {
  }

}
