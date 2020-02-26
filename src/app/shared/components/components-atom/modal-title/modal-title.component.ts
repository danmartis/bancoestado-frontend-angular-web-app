import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-title',
  templateUrl: './modal-title.component.html',
  styleUrls: ['./modal-title.component.scss']
})
export class ModalTitleComponent implements OnInit {

  @Input() type : string = '';
  @Input() className : string = '';
  constructor() { }

  ngOnInit() {
  }

}
