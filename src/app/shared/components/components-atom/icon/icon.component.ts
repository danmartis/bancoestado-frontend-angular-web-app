import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name : string;
  @Input() size : string;
  @Input() className : string;

  @Input() color : any = {}
  constructor() { }

  ngOnInit() {
  }

  public getName() : string {
    return this.name || '  ';
  }

  public getColor() : any {
    return {
      color: this.color,
    };
  }

  public getSize() : string {
    return this.size || 'md-18';
  }

  public getClassName() : string {
    return this.className || '  ';
  }
}
