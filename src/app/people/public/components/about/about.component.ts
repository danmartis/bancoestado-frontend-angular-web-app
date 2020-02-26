import { Component, OnInit } from '@angular/core';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // https://www.npmjs.com/package/ngx-tiny-slider
  tinySliderConfig: NgxTinySliderSettingsInterface;
  constructor() { }
 
  ngOnInit() {
    this.tinySliderConfig = {
      arrowKeys: true,
      autoWidth: true,
      gutter: 15,
      controls: false,
      items: 3,
      mouseDrag: true,
      slideBy: 'page',
      responsive: {
        "350": {
          "items": 3,
          "controls": false
        },
        "500": {
          "items": 3
        }
      },
    };
  }
}
