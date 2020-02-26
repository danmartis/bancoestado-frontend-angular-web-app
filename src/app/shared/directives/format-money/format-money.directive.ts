import { Directive, ElementRef, Input } from '@angular/core';
import { formatNumber } from 'src/app/shared/utils/utils';

@Directive({
  selector: '[appFormatMoney]'
})
export class FormatMoneyDirective {

  @Input('appFormatMoney') text: string = '';

  constructor(el: ElementRef) {
    el.nativeElement.textContent = formatNumber(this.text);
 }

}
