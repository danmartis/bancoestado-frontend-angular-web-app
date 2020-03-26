import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-feature',
  templateUrl: './banner-feature.component.html',
  styleUrls: ['./banner-feature.component.scss']
})
export class BannerFeatureComponent implements OnInit {

  @Input() banners : any;
  constructor() { }

  ngOnInit() {
    
  }
}