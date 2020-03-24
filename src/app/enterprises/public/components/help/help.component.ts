import { Component, OnInit, ViewChild } from '@angular/core';
import { GestorContenidoService } from '../../../../services/gestor-contenido.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  @ViewChild("questionsData", { static: true })
  protected questionsTitle = new Array();
  protected bannerContent = new Array();
  protected questionsData = new Array();

  constructor(private gestorContenido: GestorContenidoService) { }
  
  ngOnInit() {
    this.contenidoPreguntas();
  }

  async contenidoPreguntas() {
    await this.gestorContenido.getQuestions().subscribe(res => {
      this.questionsTitle = res.getDetalle()["questionsTitle"]
      this.bannerContent = res.getDetalle();

      this.questionsData = res.getDetalle()["content"];
    }), (err: any) => err.message;
  };

}
