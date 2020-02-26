import { Component, OnInit, Input } from '@angular/core';
import { formatDate, formatNumber} from 'src/app/shared/utils/utils';
import { accounts as _accounts, groups as _groups } from 'src/app/shared/utils/mock-data';
import { ModalService } from 'src/app/shared/services/modal.service';


@Component({
  selector: 'app-account-group',
  templateUrl: './account-group.component.html',
  styleUrls: ['./account-group.component.scss']
})
export class AccountGroupComponent implements OnInit {

  accounts = [];
  groups = [];

  activeTab : string = 'single';
  constructor(protected modalService:ModalService) { }

  ngOnInit() {
  }

  setGroupAccounts() {
    this.accounts = this.getAccounts();
    this.groups = this.getGroups();
  }

  getGroups() {
    return _groups.map(group => ({
      ...group,
      value: formatNumber(group.value),
    }));
  }

  getAccounts() {
    return _accounts.map(account => ({
      ...account,
      expire: formatDate(account.expire),
      value: formatNumber(account.value),
    }));

  }

  // TAB
  activateTab = (name: string) => {
    this.activeTab = name;
  }

  isActiveTab = (name: string) : boolean => {
    return this.activeTab === name;
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }
}
