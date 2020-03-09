import { Component, OnInit, Input } from '@angular/core';
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
  constructor(protected modalService:ModalService) { }

  videoItems : any = [
    {
      category: 'Categoría A',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium ipsam officiis minus quos.',
      description: '',
      videoId: 'yigaZe45uaA',
      thumb: "background-image: url(https://img.youtube.com/vi/yigaZe45uaA/0.jpg)"
    },
    {
      category: 'Categoría B',
      title: 'Video Título 2',
      description: '',
      videoId: 'yigaZe45uaA',
      thumb: "https://img.youtube.com/vi/yigaZe45uaA/0.jpg"
    },
    {
      category: 'Categoría B',
      title: 'Video Título 3',
      description: '',
      videoId: 'yigaZe45uaA',
      thumb: "https://img.youtube.com/vi/yigaZe45uaA/0.jpg"
    },
    {
      category: 'Categoría 4',
      title: 'Video Título 1',
      description: '',
      videoId: 'yigaZe45uaA',
      thumb: "https://img.youtube.com/vi/yigaZe45uaA/0.jpg"
    }
  ];

  ngOnInit() {

  }

  changeQuestion(question) {
    this.question = question;
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

}
