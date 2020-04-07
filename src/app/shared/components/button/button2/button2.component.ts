import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss']
})
export class Button2Component implements OnInit {
  @Input() modPadding : '' | 'hyper-small-padding' | 'small-padding' = '';
  @Input() size : '' | 'small' | 'medium' | 'default' = '';
  @Input() type : '' | 'primary' | 'secundario' | 'terciario' = '';
  @Input() disabled : boolean = false;
  @Input() image : string = '';
  @Input() imageAlt : string = '';
  @Input() auto : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  getAuto() {
    return this.auto ? 'button--auto' : '';
  }

}
