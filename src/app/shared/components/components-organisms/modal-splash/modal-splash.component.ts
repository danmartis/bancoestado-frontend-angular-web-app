import { Component, OnInit, HostListener, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-splash',
  templateUrl: './modal-splash.component.html',
  styleUrls: ['./modal-splash.component.scss']
})
export class ModalSplashComponent implements OnInit {

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
    if (target.tagName === 'APP-MODAL-SPLASH') {
      this.modalService.toggle(this.name);
    }
  }

  backAction() {
    this.onBack.emit();
  }

}
