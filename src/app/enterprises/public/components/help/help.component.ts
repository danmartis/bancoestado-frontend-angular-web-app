import { Component, OnInit, ViewChild } from '@angular/core';
import { GestorContenidoService } from '../../../../services/gestor-contenido.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private gestorContenido: GestorContenidoService) { }
  
  private questionsTitle = new Array();

  private bannerContent = new Array();

  @ViewChild("questionsData", { static: true })
  private questionsData = new Array();

  async contenidoPreguntas() {
    await this.gestorContenido.getQuestions().subscribe(res => {
      this.questionsTitle = res.getDetalle()["questionsTitle"]
      this.bannerContent = res.getDetalle()

      this.questionsData = res.getDetalle()["content"];
      console.log(this.questionsData)
    }), err => {
      return err.message;
    };
  };

  ngOnInit() {
    this.contenidoPreguntas();
  }

}
