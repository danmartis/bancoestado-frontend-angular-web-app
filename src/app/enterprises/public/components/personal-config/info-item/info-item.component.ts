import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent implements OnInit {

  @Input() info : {
    label: string,
    value: string
  };
  
  constructor() { }

  ngOnInit() {
  }

}
