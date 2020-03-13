import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-help-banner',
  templateUrl: './help-banner.component.html',
  styleUrls: ['./help-banner.component.scss']
})
export class HelpBannerComponent implements OnInit {

  constructor() { }

  @ViewChild("faqItems", { static: true })
  @Input() faqItems: string;

  ngOnInit() {
  }

}
