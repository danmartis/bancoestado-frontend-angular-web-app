import { Component, OnInit, Input } from '@angular/core';
import { GestorContenidoService } from "../../../../../services/gestor-contenido.service";

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.scss'],
})
export class HelpDetailsComponent implements OnInit {

  selectedCat: number = this.gestorContenido.selectItem - 1;
  questionOpen: number = this.gestorContenido.selectQuestion;
  public faqItems = new Array();
  protected bannerContent = new Array();
  
  // Abre en mínimo de preguntas a mostrar
  protected show = 5;

  constructor(private gestorContenido: GestorContenidoService) { }

  onSelectCat(catId) {
    this.show = 5;
    this.selectedCat = catId;
    this.questionOpen = 0;
  }
  
  async contenido() {
    await this.gestorContenido.getQuestions().subscribe(res => {

      this.faqItems = res.getDetalle()["content"];

      console.log( this.faqItems)

      console.log()
      this.bannerContent = res.getDetalle();
    }),
      err => {
        return err.message;
      };
  }

  ngOnInit() {
    this.contenido();
  }
}