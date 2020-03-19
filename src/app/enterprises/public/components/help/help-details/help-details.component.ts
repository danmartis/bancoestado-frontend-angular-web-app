import { Component, OnInit, Input } from '@angular/core';
import { GestorContenidoService } from "../../../../../services/gestor-contenido.service";

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.scss']
})
export class HelpDetailsComponent implements OnInit {

  selectedCat: number = 0;

  private bannerContent = new Array();
  
  private show = 3;
  

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
      this.bannerContent = res.getDetalle();
    }),
      err => {
        return err.message;
      };
  }

  ngOnInit() {
    this.contenido();
  }

  fun(id){
    return true;
  }

}