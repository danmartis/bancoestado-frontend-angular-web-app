import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { colors } from 'src/app/shared/utils/options';

@Component({
  selector: 'app-modal-account-errors',
  templateUrl: './modal-account-errors.component.html',
  styleUrls: ['./modal-account-errors.component.scss']
})
export class ModalAccountErrorsComponent implements OnInit {

  protected errorColor : string = colors.error;
  protected primaryColor : string = colors.action;
  
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  closeListOpenSingle(closeList: Array<string>, open: string) { 
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
