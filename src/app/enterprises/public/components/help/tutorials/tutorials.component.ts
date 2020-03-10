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
      videoId: 'yigaZe45uaA'
    },
    {
      category: 'Categoría B',
      title: 'Video Título 2',
      description: '',
      videoId: 'IWr8_TmBVa4'
    },
    {
      category: 'Categoría B',
      title: 'Video Título 3',
      description: '',
      videoId: 'ihve3f3T4Qk'
    },
    {
      category: 'Categoría 4',
      title: 'Video Título 1',
      description: '',
      videoId: 'w58DA6sCVG8'
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
