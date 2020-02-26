import { Component, OnInit } from '@angular/core';

import { formatNumber } from 'src/app/shared/utils/utils';
import { HistoryPayment, HistoryPaymentMonth, PaymentAccount, HistoryPaymentAdvanced } from 'src/app/shared/utils/types';
import { historyFirst, historySecond, historyAdvanced, unregisteredAccount } from 'src/app/shared/utils/mock-data';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  from : any;
  to : any;

  historyFirst : HistoryPayment = this.calculateTotal(historyFirst);
  historySecond : HistoryPayment = this.calculateTotal(historySecond);
  historyAdvanced : HistoryPaymentAdvanced = historyAdvanced;

  unregisteredAccount : Array<PaymentAccount> = unregisteredAccount;

  protected detailOpenFrist: boolean = false;
  protected detailOpenSecond: boolean = false;

  constructor() {
    
  }

  ngOnInit() {
  
  }

  getIconDetail(sec : 'first' | 'second') {
    return (sec === 'first' ? this.detailOpenFrist : this.detailOpenSecond) ? 'expand_less' : 'expand_more';
  }
  getStatusDetail(sec: 'first' | 'second') {
      return (sec === 'first' ? this.detailOpenFrist : this.detailOpenSecond) ? 'd-block' : 'd-none';
  }
    toggleDetail(sec: 'first' | 'second') {
        if (sec === 'first') {
            this.detailOpenFrist = !this.detailOpenFrist;
        } else {
            this.detailOpenSecond = !this.detailOpenSecond;
        }
    }

  formatNumber(n : number) : string {
    return formatNumber(n);
  }

  calculateTotal(data : HistoryPayment) : HistoryPayment {
    const d = data;
    d.value = d.months.reduce((prev : number , month : HistoryPaymentMonth) => {
      const totalMonth = month.accounts.reduce((p : number, v : PaymentAccount) => {
        return p + v.value;
      }, 0);
      month.value = totalMonth;
      return prev + totalMonth;
    }, 0);
    return d;
  }

  haUnregistered() {
      return unregisteredAccount.length > 0;
  }
}
