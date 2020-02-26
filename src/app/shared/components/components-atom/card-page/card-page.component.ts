import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {
  @Input() width = '';
  constructor() { }

  ngOnInit() {
  }

}
