import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-added-group',
  templateUrl: './card-added-group.component.html',
  styleUrls: ['./card-added-group.component.scss']
})
export class CardAddedGroupComponent implements OnInit {
  
  @Input() title : string = 'Agregar una cuenta';

  iconColor : string = '#042c5c';
  constructor() { }

  ngOnInit() {
  }

}
