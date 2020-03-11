import { Component, OnInit, Input } from '@angular/core';
import { PaymentAccount } from 'src/app/shared/utils/types';
import { colors, PaymentAccountAndGroupStatus } from 'src/app/shared/utils/options';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-non-registered-flow',
  templateUrl: './non-registered-flow.component.html',
  styleUrls: ['./non-registered-flow.component.scss']
})
export class NonRegisteredFlowComponent implements OnInit {

  @Input() accounts : Array<PaymentAccount>;

  closeColor = colors.default;
  checkColor = colors[PaymentAccountAndGroupStatus.Success];
  showCard = true;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  countAccounts() {
    return this.accounts.length;
  }

  toggleShowCard() {
    this.showCard = !this.showCard;
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
