import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.scss']
})
export class CalltoactionComponent implements OnInit {
  @Input() title : string;
  @Input() subtitle : string = '';
  @Input() text : string;
  @Input() buttonText : string;
  @Input() type : '' | '02' | '03' = '';
  
  constructor() { }

  ngOnInit() {
  }

}
