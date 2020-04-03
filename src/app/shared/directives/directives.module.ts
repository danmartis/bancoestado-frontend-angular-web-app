import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDateDirective } from './format-date/format-date.directive';
import { FormatMoneyDirective } from './format-money/format-money.directive';
import { RutDirective } from './format-rut/rut.directive';

@NgModule({
  declarations: [FormatDateDirective, FormatMoneyDirective, RutDirective],
  imports: [
    CommonModule
  ],
  exports: [FormatDateDirective, FormatMoneyDirective, RutDirective]
})
export class DirectivesModule { }

