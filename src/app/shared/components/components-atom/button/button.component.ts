import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() type : 'auto-block-min-w-x2' | 'auto-block-min-w' | 'button--auto-block' | 'button--auto-block-secondary' | 'min-option' | 'light' | 'header-link' | 'modal' | 'tab' | 'back' | 'primary-outline' | 'primary-outline-rounded' | 'primary-rounded' | 'unborder' | 'link' | 'alpha';
  @Input() size : 'sm' | 'lg' | 'xs';
  @Input() display : 'block';
  @Input() dResponsive : string;
  @Input() functionality : string;
  @Input() dDesktop : string;
  @Input() active : boolean = false;
  @Input() disabled : boolean = false;

  @Input() idName : string;
  @Input() className : string;

  constructor() {}

  ngOnInit() {
    switch (this.type) {
      case 'modal':
        this.display = 'block';
        this.type = 'primary-rounded';
        this.size = 'sm';
        break;
      default:
        this.type = this.type;
    }
  }

  getActive = () => this.active ? `button--active` : '';

  public getClassName() {
    const getP = param => this[param] ? `button--${this[param]}` : '';
    return `${getP('functionality')} ${getP('type')} ${getP('display')} ${getP('size')} ${this.getActive()}`;
  }
}
