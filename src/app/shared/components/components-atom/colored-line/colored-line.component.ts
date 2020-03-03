import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colored-line',
  templateUrl: './colored-line.component.html',
  styleUrls: ['./colored-line.component.scss']
})
export class ColoredLineComponent implements OnInit {

  @Input() idName : string = '';
  @Input() className : string = '';
  @Input() lineColor : string = '';
  @Input() horizontalAlign : 'left' | 'right' | 'center' | '' = 'center' ;
  @Input() length : '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'all' | '' = 'all';
  @Input() thickness : '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '' = 'md';
  @Input() spacerTop : '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '' = 'md';
  @Input() spacerbottom : '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '' = 'md';


  constructor() { }

  ngOnInit() {
  }

}
