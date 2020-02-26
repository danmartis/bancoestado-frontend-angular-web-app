import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { getIsNotNull, formatNumber } from 'src/app/shared/utils/utils';
import { PaymentAccount } from 'src/app/shared/utils/types';

@Component({
  selector: 'app-modal-card-detail',
  templateUrl: './modal-card-detail.component.html',
  styleUrls: ['./modal-card-detail.component.scss']
})
export class ModalCardDetailComponent implements OnInit {

  @Input() account : PaymentAccount = null;
  protected valueToPay : number = 0;
  protected feesToPay : number = 0;

  constructor(private modalService: ModalService) { }

  ngOnInit() {}

  closeListOpenSingle(closeList: Array<string>, open: string) { 
    this.modalService.closeListOpenSingle(closeList, open);
  }
  getIsNotNull(obj : any, prop : string) {
    return getIsNotNull(obj, prop);
  }

  setValueToPay(value : number) {
    this.valueToPay = value;
  }

  formatNumber(number : string) {
    return formatNumber(number);
  }
  getFeesToPay() {
    return formatNumber(this.feesToPay);
  }

  selectedMonto(value) {
    this.account.value = Number(value);
  }
  
}
