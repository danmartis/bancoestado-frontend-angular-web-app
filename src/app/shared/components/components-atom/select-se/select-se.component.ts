import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-se',
  templateUrl: './select-se.component.html',
  styleUrls: ['./select-se.component.scss'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class SelectSeComponent implements OnInit {
  @Input() type : '' | 'select-se--phone' = '';
  @Input() label : string = '';
  @Input() sufix : string = '';
  @Input() items : Array<any> = [];
  @Input() selected : boolean = false;
  @Input() disabled : boolean = false;

  constructor() { }

  onClick() {
    document.querySelectorAll('.select-se:not(.select-se--disabled)').forEach(item => {
      item.classList.remove('select-se--active');
    })
  }

  ngOnInit() {

  /*--SELECT--*/
  document.querySelectorAll('.select-se:not(.select-se--disabled) .select-se__default').forEach(item => {
    item.addEventListener('click', event => {
      event.stopPropagation();
      item.parentElement.classList.add('select-se--active');
    })
  })
  document.querySelectorAll('.select-se__item').forEach(item => {
    item.addEventListener('click', event => {
      let v = item.innerHTML;
      let p = item.parentElement.parentElement;
      p.classList.add('select-se--selected');
      p.classList.remove('select-se--active');
      let t = p.querySelectorAll('p');
      t[0].innerHTML = v;
    })
  })
  /*--FIN SELECT--*/
  }


  selectOption(item) {
    this.label = item.label;
    this.selected = true;
    if(item.sufix) {
      this.sufix = item.sufix;
    }
  }
}
