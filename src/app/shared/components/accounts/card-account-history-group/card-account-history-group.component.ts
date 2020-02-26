import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-account-history-group',
  templateUrl: './card-account-history-group.component.html',
  styleUrls: ['./card-account-history-group.component.scss']
})
export class CardAccountHistoryGroupComponent implements OnInit {
  @Input() type : 'open' | 'close' = 'open';
  
  constructor() { }

  ngOnInit() {
  }

  toggleType() {
    this.type = this.type === 'open' ? 'close' : 'open';
  }

}
