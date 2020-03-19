import { Component, OnInit, Input } from '@angular/core';
import { GestorContenidoService } from "../../../../../services/gestor-contenido.service";

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.scss'],
})
export class HelpDetailsComponent implements OnInit {

  selectedCat: number = this.gestorContenido.selectItem - 1;

<<<<<<< HEAD
=======
  selectedQuestion: boolean = false;
  questionOpen: number = this.gestorContenido.selectQuestion;

>>>>>>> feature/SBM-71-FMUJICA
  private bannerContent = new Array();
  
  private show = 3;
<<<<<<< HEAD
  
=======

  onSelectQuestion() {
    this.selectedQuestion = !this.selectedQuestion;
  
  }
>>>>>>> feature/SBM-71-FMUJICA

  onSelectCat(catId) {
    this.show = 3;
    this.selectedCat = catId;

   this.questionOpen = 0 

    
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