import { Component, OnInit, Input } from '@angular/core';
import { colors } from 'src/app/shared/utils/options';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {
  @Input() group;

  iconColor = colors.primary;
  iconMenu = colors.secondaryLight;
  constructor() { }

  ngOnInit() {
  }

  getColor() {
    let color = '';
    switch (this.group.status) {
      case 'success':
        color = colors.success;
        break;
      case 'error':
        color = colors.error;
        break;
      case 'warning':
        color = colors.warning;
        break;
      default:
        break;
    }

    return color;
  }
}
