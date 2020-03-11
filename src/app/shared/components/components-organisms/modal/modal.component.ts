import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  
  isOpen = false;
  @Input() name : string;
  @Input() type : 'video' | '' = '';

  @HostBinding('class.modal--open') get valid() { return this.isOpen; }  
  @HostBinding('class.modal--close') get invalid() { return !this.isOpen; }

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.change.subscribe(modal => {

      if (modal && modal.name === this.name) {
        this.isOpen = modal.isOpen;
      }
    });
    this.modalService.register(this.name);
  }

  toggle(event) {
    this.modalService.toggle(this.name);
  }

  @HostListener('click', ['$event.target'])
  onClick(target) {
    if (target.tagName === 'APP-MODAL') {
      this.modalService.toggle(this.name);
    }
  }
}
