import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][rutMaskInput]',
})
export class RutMaskDirective {

  @HostListener('input', ['$event'], )
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    
    console.log(event.which)
    let value = input.value.replace(/\./g, '').replace('-', '');


  console.log(event.key)
    const pattern = /^[0-9\k\K]*$/;
    if (!pattern.test(value)) {
      value = value.replace(/[^0-9\k\K]/g, "");
    }

    if (value.match(/^(\d{2})(\d{3}){2}(\w{1})$/)) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4');
    }

    else if (value.match(/^(\d)(\d{3}){2}(\w{0,1})$/)) {
      value = value.replace(/^(\d)(\d{3})(\d{3})(\w{0,1})$/, '$1.$2.$3-$4');
    }
    else if (value.match(/^(\d)(\d{3})(\d{0,2})$/)) {
      value = value.replace(/^(\d)(\d{3})(\d{0,2})$/, '$1.$2.$3');
    }
    else if (value.match(/^(\d)(\d{0,2})$/)) {

      value = value.replace(/^(\d)(\d{0,2})$/, '$1.$2');
    }


    input.value = value;
    }

  }
