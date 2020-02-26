import { Injectable, Output, EventEmitter } from '@angular/core';

interface Modal {
  name?: string;
  isOpen?: boolean;
}

interface ModalIndex {
  name: string;
  isOpen: boolean;
  i?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modals : Array<Modal> = [];
  @Output() change: EventEmitter<Modal> = new EventEmitter();
  register(name : string, status : boolean = false) {
    this.modals.push({ name: name, isOpen: status });
  }
  toggle(name : string) {
    const curr = this.getCurrent(name);
    this.modals[curr.i] = { ...curr, isOpen: !curr.isOpen };
    this.change.emit(this.modals[curr.i]);
  }

  private getCurrent(name : string) : ModalIndex|any {
    let i = -1;
    const curr = this.modals.find((modal, index) => {
      if (modal.name.trim() === name.trim()) {
        i = index;
        return true;
      }
      return false;
    });
    return curr ? ({ name: curr.name, isOpen: curr.isOpen, i}) : ({}); 
  }

  close(name : string) {
    const curr = this.getCurrent(name.trim());
    this.modals[curr.i] = { ...curr, isOpen: false };
    this.change.emit(this.modals[curr.i]);
  }
  open(name : string) {
    const curr = this.getCurrent(name);
    this.modals[curr.i] = { ...curr, isOpen: true };
    this.change.emit(this.modals[curr.i]);
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    closeList.forEach(modal => this.close(modal.trim()));
    this.open(open.trim());
  }
}
