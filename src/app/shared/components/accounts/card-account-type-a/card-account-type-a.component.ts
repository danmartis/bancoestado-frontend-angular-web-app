import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-account-type-a',
  templateUrl: './card-account-type-a.component.html',
  styleUrls: ['./card-account-type-a.component.scss']
})
export class CardAccountTypeAComponent implements OnInit {
  @Input() type : '' | 'logo' = '';
  @Input() contextMenu : any = true;
  @Input() editable : any = true;
  constructor() { }

  ngOnInit() {
  }

  getEditable() {
    if (this.editable === 'false') return false;
    return this.editable;
  }

  getContextMenu() {
    if (this.contextMenu === 'false') return false;
    return this.contextMenu;
  }

}
