import { Component, OnInit, Input } from '@angular/core';
import { GestorContenidoService } from "../../../../../services/gestor-contenido.service";

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.scss']
})
export class HelpDetailsComponent implements OnInit {

  selectedCat: number = 0;

  selectedQuestion: boolean = false;

  onSelectQuestion() {
    this.selectedQuestion = !this.selectedQuestion;
  }

  onSelectCat(catId) {
    this.selectedCat = catId;
  }

  protected question: string = "";
  public faqItems = new Array();

  constructor(private gestorContenido: GestorContenidoService) { }

  async contenido() {
    await this.gestorContenido.getQuestions().subscribe(res => {

      this.faqItems = res.getDetalle()["content"];
      console.log(this.faqItems)
      /*
      this.faqItems.forEach(element => {
        console.log(element);
        this.faqItems[element.items] = element.items.forEach(element => {
          this.faqItems[element.question] = element.question;
        });
      });
      */
    }),
      err => {
        return err.message;
      };
  }

  ngOnInit() {
    this.contenido();
  }

}