import { Directive, EventEmitter, Output } from "@angular/core";
import { rutClean, rutFormat, rutValidate } from "src/app/shared/utils/utils";

@Directive({
  selector: "[formatRut]",
  host: {
    "(input)": "onChange($event)"
  }
})
export class RutDirective {
  @Output() public rutChange: EventEmitter<any>;

  constructor() {
    this.rutChange = new EventEmitter();
  }

  public onChange(ev: Event) {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement>ev.target;
    this.rutChange.emit(rutClean(htmlInputElement.value));
    htmlInputElement.value = rutFormat(htmlInputElement.value) || "";
  }
}
