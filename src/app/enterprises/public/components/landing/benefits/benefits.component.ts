import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {


  benefits = [
    {
      title: 'Gestión fácil',
      description: 'de tus convenios, facturaciones, comprobantes y nóminas de recaudación.',
      iconSrc: '/assets/imgs/svg/icono_gestion.svg',
      lineColor: '#FFB842'
    },
    {
      title: 'Trazabilidad y visibilidad',
      description: 'de todos los procesos, hasta el abono de las recaudaciones en la cuenta que indiques.',
      iconSrc: '/assets/imgs/svg/icono_trazabilidad.svg',
      lineColor: '#1E63F8'
    },
    {
      title: 'Seguridad y respaldo',
      description: 'un ejecutivo siempre estará dispuesto a resolver tus dudas.',
      iconSrc: '/assets/imgs/svg/icono_seguridad.svg',
      lineColor: '#00D692'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
