import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colored-line',
  templateUrl: './colored-line.component.html',
  styleUrls: ['./colored-line.component.scss']
})
export class ColoredLineComponent implements OnInit {

  @Input() idName : string = '';
  @Input() className : string = '';
  @Input() horizontal : '' | 'left' | 'right' | 'center' = '';
  @Input() vertical : '' | 'up' | 'down' | 'down' = '';

  constructor() { }

  ngOnInit() {
  }

}
