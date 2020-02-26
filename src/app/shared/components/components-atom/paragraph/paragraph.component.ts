import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  @Input() type : '' | 'step' | 'primary' | 'min' | 'value' | 'sub-value' | 'min-sub-value' | 'data' = '';
  @Input() display : string = '';
  constructor() { }

  ngOnInit() {
  }

}
