import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, OnChanges {
  @Output() onChange = new EventEmitter<any>();
  @Input() checked: boolean = false;
  @Input() value: boolean;
  @Input() position: boolean;
  @Input() display: string = '';
  @Input() valueType: string = '';
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.checked);
  }

  onToggle() {
    this.checked = !this.checked;
    this.onChange.emit(this.checked);
   }

}
