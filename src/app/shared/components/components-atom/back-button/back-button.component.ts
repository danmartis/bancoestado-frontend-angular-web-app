import { Component, OnInit } from '@angular/core';
import { colors } from 'src/app/shared/utils/options';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  iconColor = colors.default;
  constructor() { }

  ngOnInit() {
  }

}
