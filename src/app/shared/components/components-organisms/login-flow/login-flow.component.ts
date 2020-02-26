import { Component, OnInit } from '@angular/core';
import { emailValidate } from 'src/app/shared/utils/utils';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-login-flow',
  templateUrl: './login-flow.component.html',
  styleUrls: ['./login-flow.component.scss']
})
export class LoginFlowComponent implements OnInit {

  protected email : string = '';
  protected emailReset : string = '';

  constructor(protected modalService:ModalService) { }

  ngOnInit() {
  }

  emailValidate(email) {
    if (email === '') {
      return '';
    } else if (emailValidate(email)) {
      return 'valid';
    }
    return 'invalid';
  }
  
  setEmail(email : string) {
    this.email = email;
  }

  setEmailReset(emailReset : string) {
    this.emailReset = emailReset;
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }
}
