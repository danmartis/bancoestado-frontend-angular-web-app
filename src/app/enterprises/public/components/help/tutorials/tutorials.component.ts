import { Component, OnInit, Input } from '@angular/core';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  @Input() id : string = 'enterprises__help__tutorials';

  protected question : string = '';
  // https://www.npmjs.com/package/ngx-tiny-slider
  tinySliderConfig: NgxTinySliderSettingsInterface;
  constructor(protected modalService:ModalService) { }

  videoItems : any = [
    {
      category: 'Categoría',
      title: 'Video Título 1',
      description: '',
      videoId: 'yigaZe45uaA',
      thumb: "https://img.youtube.com/vi/yigaZe45uaA/0.jpg"
    },
    {
      category: 'Categoría',
      title: 'Video Título 1',
      description: '',
      videoId: 'yigaZe45uaA',
      thumb: "https://img.youtube.com/vi/yigaZe45uaA/0.jpg"
    },
    {
      category: 'Categoría',
      title: 'Video Título 1',
      description: '',
      videoId: 'yigaZe45uaA',
      thumb: "https://img.youtube.com/vi/yigaZe45uaA/0.jpg"
    },
    {
      category: 'Categoría',
      title: 'Video Título 1',
      description: '',
      videoId: 'yigaZe45uaA',
      thumb: "https://img.youtube.com/vi/yigaZe45uaA/0.jpg"
    }
  ];

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
