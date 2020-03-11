import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { GestorContenidoService } from 'src/app/services/gestor-contenido.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  @Input() id : string = 'enterprises__help__tutorials';

  private videoItems = new Array();
  private title : string;
  protected question : string = '';

  // https://www.npmjs.com/package/ngx-tiny-slider
  constructor(protected modalService:ModalService,private gestorContenido: GestorContenidoService) { }

  ngOnInit() {
    this.contenido();
  }

  changeQuestion(question) {
    this.question = question;
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    console.log(open+ "mas "+ closeList)
    this.modalService.closeListOpenSingle(closeList, open);
  }

  async contenido(){
    await this.gestorContenido.getVideos().subscribe( res => {
      this.videoItems = res.getDetalle()['videoItems'];
      this.title = res.getDetalle()['titleMain'];
    }),
    err => {
      console.log('err', err);
      return err;
    }
  }

}
