import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  @Input() benefits : string;

  constructor() { }

  ngOnInit() {
  }

}
