import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-modal-edit-account-detail',
  templateUrl: './modal-edit-account-detail.component.html',
  styleUrls: ['./modal-edit-account-detail.component.scss']
})
export class ModalEditAccountDetailComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }
}
