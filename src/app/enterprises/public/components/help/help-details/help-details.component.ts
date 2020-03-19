import { Component, OnInit, Input } from '@angular/core';
import { GestorContenidoService } from "../../../../../services/gestor-contenido.service";

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.scss'],
})
export class HelpDetailsComponent implements OnInit {

  selectedCat: number = this.gestorContenido.selectItem;

  selectedQuestion: boolean = false;
  questionOpen: number = this.gestorContenido.selectQuestion;

  private bannerContent = new Array();

  private show = 3;

  onSelectQuestion() {
    this.selectedQuestion = !this.selectedQuestion;
  }

  onSelectCat(catId) {
    this.show = 3;
    this.selectedCat = catId;
  }

  protected question: string = "";
  public faqItems = new Array();

  constructor(private gestorContenido: GestorContenidoService) { }

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

  openQuestion(id){


    console.log(id)
    if(this.questionOpen === id){
      this.questionOpen = 0;
    } else {
      this.questionOpen = id
    }
  

  }

  fun(id){

    console.log(id)
   
  }

}