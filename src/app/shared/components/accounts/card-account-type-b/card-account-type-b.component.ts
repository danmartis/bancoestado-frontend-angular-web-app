import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-account-type-b',
  templateUrl: './card-account-type-b.component.html',
  styleUrls: ['./card-account-type-b.component.scss']
})
export class CardAccountTypeBComponent implements OnInit {
  @Input() status : '' | 'danger' | 'warning' | 'success' = '';
  constructor() { }

  ngOnInit() {
  }

  getStatus(status: string) {
    return this.status === status ? status : '';
  }
}