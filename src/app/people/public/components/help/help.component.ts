import { Component, OnInit } from '@angular/core';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  protected question : string = '';
  // https://www.npmjs.com/package/ngx-tiny-slider
  tinySliderConfig: NgxTinySliderSettingsInterface;
  constructor(protected modalService:ModalService) { }
 
  ngOnInit() {
    this.tinySliderConfig = {
      arrowKeys: true,
      autoWidth: true,
      gutter: 15,
      controls: false,
      items: 4,
      mouseDrag: true,
      slideBy: 'page',
      responsive: {
        "350": {
          "items": 3,
          "controls": false
        },
        "500": {
          "items": 3
        }
      },
    };
  }

  changeQuestion(question) {
    this.question = question;
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
