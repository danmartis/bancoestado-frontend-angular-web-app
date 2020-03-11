import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss']
})
export class CapsuleComponent implements OnInit {

  @Input() type : '' | 'welcome-01' | 'welcome-02' | 'welcome-03' | 'welcome-message-header-logout';
  @Input() modificator : 'smw-100' | '' = '';
  constructor(protected modalService:ModalService) { }

  ngOnInit() {
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }
}
