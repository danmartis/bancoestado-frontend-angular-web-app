import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  protected reason : string = '';
  protected phone : string = '';
  constructor(protected modalService:ModalService) { }

  ngOnInit() {
    document.querySelectorAll('.inputfile__input').forEach(item => {
      var label	 = item.nextElementSibling,
			labelVal = label.innerHTML;
      item.addEventListener('change', event => {
        var fileName = (<HTMLInputElement>item).files[0].name;
        var s = label.querySelectorAll('span');
        s[0].innerHTML = fileName;
      })
    })
  }

  changeReason(reason) {
    this.reason = reason;
  }

  changePhone(phone) {
    this.phone = phone;
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
