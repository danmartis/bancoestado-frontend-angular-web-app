import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { GestorContenidoService } from 'src/app/services/gestor-contenido.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  @Input() id : string = 'enterprises__help__tutorials';

  videoItems = new Array();
  title : string;
  question : string = '';
  show = 3;
  idVideo : string;
  static question: string;

  constructor(protected modalService:ModalService,private gestorContenido: GestorContenidoService,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.contenido();
  }

  changeQuestion(question) {
    this.question = question;
  }
  closeListOpenSingle(closeList: Array<string>, open: string, id: string) {
    this.idVideo = id;
    this.modalService.closeListOpenSingle(closeList, open);
  }

  // urlVideo(){
  //   return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.idVideo);
  // }

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
