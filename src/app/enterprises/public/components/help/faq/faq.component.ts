import {
  Component,
  OnInit,
  ViewChildren,
  ViewChild,
  QueryList,
  AfterViewInit,
  Input
} from "@angular/core";
import { NgxTinySliderSettingsInterface } from "ngx-tiny-slider";
import { ModalService } from "src/app/services/modal.service";
import { NgxTinySliderComponent } from "ngx-tiny-slider/lib/ngx-tiny-slider.component";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"]
})
export class FaqComponent implements OnInit, AfterViewInit {
  protected question: string = "";
  // https://www.npmjs.com/package/ngx-tiny-slider
  public tinySliderConfig: any; // NgxTinySliderSettingsInterface;
  constructor(protected modalService: ModalService) { }

  @ViewChildren("carouselItemList")
  private carouselItemList: QueryList<any>;

  @ViewChild("ngxSlider", { static: false })
  private ngxSlider: any;

  // @ViewChild("faqItems", { static: true })
  @Input() faqItems: string;

  ngOnInit() {
    // this.contenido();
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

  changeQuestion(faqItems) {
    this.faqItems = faqItems;
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  ngAfterViewInit(): void {
    this.carouselItemList.changes.subscribe(() =>
      this.ngxSlider.domReady.next()
    );
    if (this.faqItems != null) {
      // @ts-ignore
      this.ngxSlider.domReady.next();
    }
  }
}
