import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-account-detail-new',
  templateUrl: './card-account-detail-new.component.html',
  styleUrls: ['./card-account-detail-new.component.scss']
})
export class CardAccountDetailComponentNew implements OnInit {

  @Output() openEditAccount = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  openEdit() {
    this.openEditAccount.emit();
  }
}
