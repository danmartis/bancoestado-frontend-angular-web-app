import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-added-account',
  templateUrl: './card-added-account.component.html',
  styleUrls: ['./card-added-account.component.scss']
})
export class CardAddedAccountComponent implements OnInit {

  @Input() title : string = 'Agregar una cuenta';

  iconColor : string = '#042c5c';
  constructor() { }

  ngOnInit() {
  }
}
