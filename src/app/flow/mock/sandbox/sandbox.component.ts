import { Component, OnInit } from '@angular/core';
import { session } from 'src/app/shared/utils/utils';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
  host: {
    "(window:click)": "onClick()"
  }
})

export class SandboxComponent implements OnInit {

  textSearch : string = 'Claudio';
  constructor(protected modalService:ModalService) { }

  onClick() {
    document.querySelectorAll('.toasts').forEach(item => {
      item.classList.remove('toasts--active');
    })
  }

  ngOnInit() { 

   }
  handlerChangeSearch(data) {
    this.textSearch = data;
  }

  login() {
    session.login('Patricio', 'Soto');
  }
  logout() {
    session.logout();
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  openToasts(event,e) {
    event.stopPropagation();
    document.querySelectorAll(".toasts[data-name=" + CSS.escape(e) + "]").forEach(item => {
      item.classList.remove('toasts--out');
      item.classList.add('toasts--active');
      setTimeout(function(){ 
        item.classList.remove('toasts--active'); 
        item.classList.add('toasts--out'); 
      }, 3000);
      setTimeout(function(){ 
        item.classList.remove('toasts--out'); 
      }, 4000);
    })
  }

}
