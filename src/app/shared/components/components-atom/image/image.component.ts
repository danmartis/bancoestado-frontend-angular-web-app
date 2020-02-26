import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() height = '';
  @Input() alt = '';
  @Input() src = '';
  @Input() type : '' | 'avatar' | 'alternative' = '';

  constructor() { }

  ngOnInit() {
  }

}
