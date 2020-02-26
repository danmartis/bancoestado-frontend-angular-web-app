import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  element: any;

  @Input() type : string = 'default';
  constructor(private elt:ElementRef) {
    this.element = elt;
   }

  ngOnInit() {
  }

  getType() {
    return `badge--${this.type}`;
  }

  getContentClassName() {
    const textNode = this.elt.nativeElement.childNodes[0];
    const text = textNode.innerText;
    const n = Number.parseFloat(text);
    const isNumber = Number.isInteger(n)
    
    const nClass = (n % 2) === 0 ? 'badge--even' : 'badge--odd';
    return isNumber ? nClass : '';
  }
}
