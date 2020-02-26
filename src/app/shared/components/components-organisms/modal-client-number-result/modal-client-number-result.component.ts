import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientNumber } from 'src/app/shared/utils/types';

@Component({
  selector: 'app-modal-client-number-result',
  templateUrl: './modal-client-number-result.component.html',
  styleUrls: ['./modal-client-number-result.component.scss']
})
export class ModalClientNumberResultComponent implements OnInit {

  @Input() clientNumberFound : Array<ClientNumber> = [];
  @Output() onSelectNumber = new EventEmitter<string|number>();
  
  constructor() { }

  ngOnInit() {
  }

  getClientNumber() {
    console.log('this.clientNumberFound', this.clientNumberFound);
    return this.clientNumberFound;
  }

  assingClientNumber(index: number) {
    this.onSelectNumber.emit(this.clientNumberFound[index].number);
  }

  getText() {
    this.clientNumberFound.length === 1 ? 'Tú número de cliente es ' : 'Tienes más de un número de cliente asociado a tu rut.';
  }
}
