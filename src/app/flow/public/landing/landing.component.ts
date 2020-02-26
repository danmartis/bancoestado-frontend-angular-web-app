import { Component, OnInit } from '@angular/core';
import { ModalService } from './node_modules/src/app/shared/services/modal.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(protected modalService:ModalService) { }

  ngOnInit() {
  }
  
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
