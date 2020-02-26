import { Component, OnInit, Input } from '@angular/core';
import { colors, colorsAccount, OptionsGroup, iconAccount } from 'src/app/shared/utils/options';
import { PaymentAccount } from 'src/app/shared/utils/types';
import { getIsNotNull, getIconByName } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-card-account-group',
  templateUrl: './card-account-group.component.html',
  styleUrls: ['./card-account-group.component.scss']
})
export class CardAccountGroupComponent implements OnInit {

  @Input() account : PaymentAccount;

  iconColor = '#77869e';

  constructor() { }

  ngOnInit() {
  }

  handlerClick() {
    this.account.selected = !this.account.selected;
  }

  toggleOptionsStatus() {

  }

  getColorAccount() {
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
  
  getColor() {
    let color = '';
    switch (this.account.status) {
      case 'success':
        color = colors.success;
        break;
      case 'error':
        color = colors.error;
        break;
      case 'warning':
        color = colors.warning;
        break;
      default:
        break;
    }

    return color;
  }

}
