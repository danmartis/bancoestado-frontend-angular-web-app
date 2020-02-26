import { Component, OnInit, Input } from '@angular/core';
import { colors } from 'src/app/shared/utils/options';

@Component({
  selector: 'app-back-button-page',
  templateUrl: './back-button-page.component.html',
  styleUrls: ['./back-button-page.component.scss']
})
export class BackButtonPageComponent implements OnInit {
  @Input() title : string = 'Volver';
  iconColor = colors.default;
  constructor() { }

  ngOnInit() {
  }

}
