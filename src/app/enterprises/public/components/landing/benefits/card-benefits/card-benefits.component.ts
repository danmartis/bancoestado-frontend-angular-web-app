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
  /*
  @Input() iconSrc: string = '/assets/imgs/svg/icon-estrella-bg.svg';
  @Input() title: string = 'Título';
  @Input() description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  */

  constructor() { }

  ngOnInit() {
  }

}
