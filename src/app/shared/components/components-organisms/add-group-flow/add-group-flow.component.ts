import { Component, OnInit } from '@angular/core';
import { IconGroup } from 'src/app/shared/utils/types';
import { getIconsList, getPaymentAccountList } from 'src/app/shared/utils/utils';
import { ModalService } from 'src/app/services/modal.service';
import { colors } from 'src/app/shared/utils/options';
import { accounts } from 'src/app/shared/utils/mock-data';

@Component({
  selector: 'app-add-group-flow',
  templateUrl: './add-group-flow.component.html',
  styleUrls: ['./add-group-flow.component.scss']
})
export class AddGroupFlowComponent implements OnInit {

  protected accounts = getPaymentAccountList(false);
  protected iconGropFavoriteList : Array<IconGroup>;
  protected iconGropAllList : Array<IconGroup>;
  protected addedAccount : number = 0;
  protected linkColor : string = colors.link;
  constructor(protected modalService:ModalService) { }

  ngOnInit() {
    this.iconGropFavoriteList = getIconsList(true);
    this.iconGropAllList = getIconsList();
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }
}
