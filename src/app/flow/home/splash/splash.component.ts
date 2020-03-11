import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, AfterViewInit {

  showStep : number = 0;
  constructor(protected modalService:ModalService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalService.closeListOpenSingle([], 'modal-splash-00');  
    }, 100);
  }

  setStep(step: number) {
    this.showStep = step;
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
