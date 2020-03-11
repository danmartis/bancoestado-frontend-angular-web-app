import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { paymentMethodBELogin } from 'src/app/shared/utils/mock-data';

@Component({
  selector: 'app-login-flow-be',
  templateUrl: './login-flow-be.component.html',
  styleUrls: ['./login-flow-be.component.scss']
})
export class LoginFlowBeComponent implements OnInit {

  protected paymentMethodBELogin : Array<any> = paymentMethodBELogin;
  constructor(protected modalService:ModalService) { }

  ngOnInit() {
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
