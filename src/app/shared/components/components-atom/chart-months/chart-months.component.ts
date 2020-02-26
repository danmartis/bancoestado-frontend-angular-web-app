import { Component, OnInit, Input } from '@angular/core';
import { HistoryPaymentMonth } from 'src/app/shared/utils/types';
import { formatNumber } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-chart-months',
  templateUrl: './chart-months.component.html',
  styleUrls: ['./chart-months.component.scss']
})
export class ChartMonthsComponent implements OnInit {

  @Input() months : Array<HistoryPaymentMonth>;

  height : number = 20;

  parts : Array<number> = [];
  constructor() { }

  ngOnInit() {
    this.generatePart(this.getMaxValue());
  }

  getMonthCount() {
    return this.months.length;
  }

  getCalculateHeight() {
    return this.height + (30*this.getMonthCount());
  }

  getValue() : Array<number> {
    return this.months.map((m : HistoryPaymentMonth) => Number.parseFloat(`${m.value}`));
  }

  getMonthPercentValue () {
    return this.months.map((m : HistoryPaymentMonth) => {
      return {
        value:  Number.parseFloat(`${m.value}`),
        percent: (Number.parseFloat(`${m.value}`)*100)/this.getMaxValue(),
      }
    });
  }

  getMaxValue() : number {
    const m = Math.round(Math.max(...this.getValue()));
    if( m > 1000000000) return m + 1000000000;
    if( m > 100000000) return m + 100000000;
    if( m > 10000000) return m + 10000000;
    if( m > 1000000) return m + 1000000;
    if( m > 100000) return m + 100000;
    if( m > 10000) return m + 10000;
    if( m > 1000) return m + 1000;
    if( m > 100) return m + 100;
  }

  generatePart(value : number) {
    const _00_ = 0;
    const _25_ = Math.round((25*value)/100);
    const _50_ = Math.round((50*value)/100);
    const _75_ = Math.round((75*value)/100);
    this.parts = [_00_, _25_, _50_, _75_, value];
  }

  formatNumber(value : number) : string {
    return formatNumber(value);
  }

  getCalculatePercentAndSumMonths() {
    const v = this.getValue();
    const total = v.reduce((prev: number, current: number) => prev + current, 0);
    return this.months.map((m : HistoryPaymentMonth, i : number) => {
      return {
        name: m.name,
        value: v[i],
        percent: Math.round((v[i]*100)/total),
      };
    });
  }

}
