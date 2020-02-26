import { Component, OnInit, Input } from '@angular/core';
import { getIconByName } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-icon-group',
  templateUrl: './icon-group.component.html',
  styleUrls: ['./icon-group.component.scss']
})
export class IconGroupComponent implements OnInit {

  @Input() name : string = 'default'
  constructor() { }

  ngOnInit() {
  }
  getIcon() {
    return getIconByName(this.name).img;
  }
}
