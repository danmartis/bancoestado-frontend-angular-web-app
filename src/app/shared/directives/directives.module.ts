import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDateDirective } from './format-date/format-date.directive';
import { FormatMoneyDirective } from './format-money/format-money.directive';

@NgModule({
  declarations: [FormatDateDirective, FormatMoneyDirective],
  imports: [
    CommonModule
  ],
  exports: [FormatDateDirective, FormatMoneyDirective]
})
export class DirectivesModule { }

