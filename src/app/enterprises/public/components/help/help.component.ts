import { Component, OnInit, ViewChild } from '@angular/core';
import { GestorContenidoService } from '../../../../services/gestor-contenido.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private gestorContenido: GestorContenidoService) { }
  
  @ViewChild("faqItems", { static: true })
  private faqItems = new Array();

  async contenidoPreguntas() {
    await this.gestorContenido.getQuestions().subscribe(res => {
      this.faqItems = res.getDetalle();
      this.faqItems[res.getDetalle()].forEach(element => {
        this.faqItems[element.content] = element.content.forEach(element => {
          this.faqItems[element.items] = element.items;
        });
      });
    }), err => {
      return err.message;
    };
  };

  ngOnInit() {
    this.contenidoPreguntas();
  }

}
