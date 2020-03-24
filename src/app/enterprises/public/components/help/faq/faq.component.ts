import {
  Component,
  OnInit,
  ViewChildren,
  ViewChild,
  QueryList,
  AfterViewInit,
  Input
} from "@angular/core";
// import { NgxTinySliderSettingsInterface } from "ngx-tiny-slider";
import { ModalService } from "src/app/services/modal.service";
// import { NgxTinySliderComponent } from "ngx-tiny-slider/lib/ngx-tiny-slider.component";
import { Router } from '@angular/router';
import { GestorContenidoService } from 'src/app/services/gestor-contenido.service';


@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"]
})
export class FaqComponent implements OnInit, AfterViewInit {

  @Input() questionsTitle: string;
  @Input() questionsData: string;
  protected question: string = "";
  // https://www.npmjs.com/package/ngx-tiny-slider
  public tinySliderConfig: any; // NgxTinySliderSettingsInterface;
  @ViewChildren("carouselItemList")
  private carouselItemList: QueryList<any>;
  @ViewChild("ngxSlider", { static: false })
  private ngxSlider: any;

  constructor(protected modalService: ModalService, private router: Router, private gestorContenidoService: GestorContenidoService) { }

  ngOnInit() {
    this.tinySliderConfig = {
      waiteForDom: true,
      //preventScrollOnTouch: 'auto',
      preventScrollOnTouch: "force",
      arrowKeys: true,
      autoWidth: true,
      gutter: 15,
      controls: false,
      items: 4,
      mouseDrag: true,
      slideBy: "page",
      responsive: {
        "250": {
          items: 3,
          controls: false
        },
        "500": {
          items: 3
        }
      }
    };
  }

  changeQuestion(questionsData) {
    this.questionsData = questionsData;
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  ngAfterViewInit(): void {
    this.carouselItemList.changes.subscribe(() =>
      //this.ngxSlider.domReady.next()
      this.questionsData != null && this.ngxSlider.domReady.next()
    );
  }

  handleFaqDetail(item) {
    console.log('item', item);
    this.gestorContenidoService.selectItem = item.idGroup;
    this.gestorContenidoService.selectQuestion = item.id
    this.router.navigate([`/empresas/ayuda/detalles/categoria/${this.gestorContenidoService.selectItem}/pregunta/${this.gestorContenidoService.selectQuestion}`]);
  }

  handleGroupDetail(item) {
    console.log('item', item);
    this.gestorContenidoService.selectItem = item.id;
    this.router.navigate([`/empresas/ayuda/detalles/categoria/${this.gestorContenidoService.selectItem}`]);
  }
}
