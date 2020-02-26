import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { currentOrParentContainDataValue, formatNumber, getIconByName } from 'src/app/shared/utils/utils';

import { iconAccount, colorsAccount, colors } from 'src/app/shared/utils/options';
import { PaymentAccount } from 'src/app/shared/utils/types';

@Component({
  selector: 'app-card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.scss']
})

export class CardAccountComponent implements OnInit {

  @Input() account : PaymentAccount;
  @Input() optionStatus : boolean = false;

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() showDetail: EventEmitter<any> = new EventEmitter();

  iconColor: string = colors.default;
  constructor() {
    this.closeContextMenu = this.closeContextMenu.bind(this);
  }

  ngOnInit() {
    document.body.addEventListener('click', this.closeContextMenu);
  }
  public getType() {
    return this.account.type ? `card-account--${this.account.type}` : '';
  }

  formatNumber(num) {
    return formatNumber(num);
  }

  toggleOptionsStatus() {
    this.optionStatus = !this.optionStatus;
  }

  getOptionsStatus() {
    return this.optionStatus ? 'card-account__options--open' : 'card-account__options--close';
  }

  removeCard() {
    this.close.emit(null);
  }

  showDetailOpen($event) {
    const result = currentOrParentContainDataValue($event.target, 'parent', 'false');
    if (!!!result && this.account.expirePayment > 0 && this.account.fullPayment > 0) {
      this.showDetail.emit($event);
    }
  }

  showDetailAccount() {
    this.showDetail.emit(this.account);
  }

  getIcon() {
    if (this.account.group !== undefined && this.account.group !== '') {
      const img = getIconByName(this.account.group).imgAlt;
      return img;
    }
    return iconAccount[this.account.type];
  }

  getColorAccount() {
    if (this.account.group !== undefined && this.account.group !== '') {
      return colorsAccount.group;
    }
    return colorsAccount[this.account.type];
  }

  closeContextMenu($event) {
    const result = currentOrParentContainDataValue($event.target, 'type', 'card-account__context-menu');
    if (!!!result) {
      this.optionStatus = false;
    }
  }
}
