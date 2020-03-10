import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { ModalService } from 'src/app/shared/services/modal.service';
import { NgxTinySliderComponent } from 'ngx-tiny-slider/lib/ngx-tiny-slider.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterViewInit {

  protected question : string = '';
  // https://www.npmjs.com/package/ngx-tiny-slider
  tinySliderConfig: any; // NgxTinySliderSettingsInterface;
  constructor(protected modalService:ModalService) { }

  @ViewChildren('carouselItemList')
  private carouselItemList:QueryList<any>;

  @ViewChild('ngxSlider', {static: false})
  private ngxSlider:any;

  faqItems : any = [
    {
      icon: 'insert_drive_file',
      category: 'Recaudaciones',
      items: [
        { 
          question: 'Recauda con nosotros',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '20'
        },
        { 
          question: 'Tipos de conexión disponible',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '19'
        },
        { 
          question: 'Active tu convenio',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '18'
        },
        { 
          question: 'Alternativas de recaudación',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '17'
        },
        { 
          question: 'Beneficio para tus clientes',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '16'
        },
      ]
    },
    {
      icon: 'credit_card',
      category: 'Pago de cuentas',
      items: [
        { 
          question: 'Inscribe tus cuentas',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '20'
        },
        { 
          question: 'Paga tus cuentas',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '19'
        },
        { 
          question: 'Agrupa tus cuentas',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '18'
        },
        { 
          question: 'Paga tus cuentas masivamente',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '17'
        },
        { 
          question: 'Enrola tu medio de pago',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '16'
        },
      ]
    },
    {
      icon: 'wifi',
      category: 'Servicios en línea',
      items: [
        { 
          question: 'Reportes',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '20'
        },
        { 
          question: 'Rendiciones',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '19'
        },
        { 
          question: 'Configuración de comprobante',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '18'
        },
        { 
          question: 'Configuración de convenio',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '17'
        },
        { 
          question: 'Administración de perfiles',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '16'
        },
      ]
    },
    {
      icon: 'check_circle',
      category: 'Otros',
      items: [
        { 
          question: 'Quiénes pueden operar',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '20'
        },
        { 
          question: 'Nosotros',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '19'
        },
        { 
          question: '¿Cómo me registro?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ex officia dolorem molestias soluta tempora neque commodi ipsum harum deleniti incidunt itaque, atque ab asperiores numquam perferendis id quas?',
          views: '18'
        }
      ]
    },
  ];
 
  ngOnInit() {
    this.tinySliderConfig = {
      waiteForDom: true,
      //preventScrollOnTouch: 'auto',
      preventScrollOnTouch: 'force',
      arrowKeys: true,
      autoWidth: true,
      gutter: 15,
      controls: false,
      items: 4,
      mouseDrag: true,
      slideBy: 'page',
      responsive: {
        "250": {
          "items": 3,
          "controls": false
        },
        "500": {
          "items": 3
        }
      },
    };
  }

  changeQuestion(question) {
    this.question = question;
  }
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  

  ngAfterViewInit(): void {
      this.carouselItemList.changes.subscribe(() => this.ngxSlider.domReady.next());
      if (this.faqItems != null) {
        // @ts-ignore
        this.ngxSlider.domReady.next();
      }
  }

}
