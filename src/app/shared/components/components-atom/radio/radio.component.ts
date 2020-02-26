import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() checked : boolean = false;
  @Input() value : string = '';
  constructor() { }

  ngOnInit() {
  }

}
