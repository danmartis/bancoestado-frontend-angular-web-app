import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss']
})
export class CardDefaultComponent implements OnInit {

  @Input() className = "";
  @Input() type : '' | 'contact' =  "";
  constructor() { }

  ngOnInit() {
  }

}
