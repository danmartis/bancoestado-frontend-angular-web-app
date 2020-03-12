import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  id : string = "enterprises__login";

  modalName : string = "enterprises__login__modal__invalid-data";

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  invalidLoginModal() {
    console.log('hola')
    this.modalService.toggle(this.modalName);
  }

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

}
