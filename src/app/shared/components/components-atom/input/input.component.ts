import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() isOpen: boolean = false;
  @Input() isDrop: boolean = false;
  @Input() mode: '' | 'wrapper' = '';
  @Input() type: '' | 'text' | 'email' | 'password' = 'text';
  @Input() icon: string;
  
  @Input() iconSrc: string = '';
  @Input() iconLeft: string;
  @Input() placeholder: string;
  @Input() value: string = '';
  @Input() maxlength: number;
  @Input() size: number;
  @Input() options: boolean | Array<any> = false;
  @Input() typeOptions: '' | 'listOrder' | 'list' = '';

  @Input() className: string = '';
  @Input() idName: string = '';

  @Input() status: 'valid' | 'invalid' | '' = '';
  @Input() invalidText: string = 'Tienes un error';

  @Input() disabled: boolean = false;

  @Output() public onChange = new EventEmitter<string>();

  @Output() public onChangeConvenio = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  getStatus() {
    return this.status ? `input--${this.status}` : '';
  }

  getAttribute(key: string): string {
    return this[key] ? this[key] : '';
  }

  getIcon() {
    return this.icon ? `input--icon` : '';
  }

  getIconName() {
    if (this.status === '') {
      if (this.icon) return this.icon;
    }
    return '';
  }

  getStatusIcon() {
    if(this.icon != 'none') {
      switch (this.status) {
        case 'valid':
          return 'check_circle';
        case 'invalid':
          return 'cancel';
        default:
          return '';
      }
    }
  }

  getNativeIcon() {
    switch (this.type) {
      case 'email':
        return 'email';
      case 'password':
        return 'lock';
      default:
        return '';
    }
  }

  handlerChange(event) {
    this.onChange.emit(event.target.value);
  }

  isOpenSetTrue() {
    this.isOpen = true;
  }

  selectElement(value) {
    console.log(value);
    this.value = value.servicio;
    this.options = [];
    this.onChangeConvenio.emit(value);
  }
}