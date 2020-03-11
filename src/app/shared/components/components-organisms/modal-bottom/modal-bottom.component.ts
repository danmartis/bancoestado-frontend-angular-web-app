import { Component, OnInit, Input, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-bottom',
  templateUrl: './modal-bottom.component.html',
  styleUrls: ['./modal-bottom.component.scss'],
})
export class ModalBottomComponent implements OnInit {
  
  isOpen = false;
  @Input() activateBack = false;

  @Output() onBack = new EventEmitter<any>();
  @Input() name : string;

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
    if (target.tagName === 'APP-MODAL-BOTTOM') {
      this.modalService.toggle(this.name);
    }
  }

  backAction() {
    this.onBack.emit();
  }
}

