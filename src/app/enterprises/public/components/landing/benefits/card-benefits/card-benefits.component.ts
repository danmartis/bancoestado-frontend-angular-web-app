import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-benefits',
  templateUrl: './card-benefits.component.html',
  styleUrls: ['./card-benefits.component.scss']
})
export class CardBenefitsComponent implements OnInit {

  @Input() idName: string = '';
  @Input() className: string = '';
  @Input() cardData: { 
    title: string,
    description: string
    iconSrc: string,
    lineColor: string
  };
  ;

  constructor() { }

  ngOnInit() {
  }

}
