import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  @Input() items : Array<string> = [];
  @Input() parent : any = null;
  constructor() { }

  ngOnInit() {
  }

  action(i) {
    debugger
  }

}
