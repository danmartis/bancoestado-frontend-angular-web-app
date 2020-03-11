import { Component, OnInit } from '@angular/core';
import { PaymentBank } from 'src/app/shared/utils/types';
import { paymentMethodList } from 'src/app/shared/utils/mock-data';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-payment-enroll',
  templateUrl: './payment-enroll.component.html',
  styleUrls: ['./payment-enroll.component.scss']
})
export class PaymentEnrollComponent implements OnInit {

  protected paymentMethodList  : Array<PaymentBank> = paymentMethodList;
  
  constructor(protected modalService:ModalService) { }

  ngOnInit() {
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
