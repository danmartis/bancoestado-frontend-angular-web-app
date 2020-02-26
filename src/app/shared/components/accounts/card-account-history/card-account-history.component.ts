import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-account-history',
  templateUrl: './card-account-history.component.html',
  styleUrls: ['./card-account-history.component.scss']
})
export class CardAccountHistoryComponent implements OnInit {
  @Input() type : '' | 'info' = '';
  @Input() status : 'Pagado' | 'Vencido' = 'Pagado';
  constructor() { }

  ngOnInit() {
  }

}
