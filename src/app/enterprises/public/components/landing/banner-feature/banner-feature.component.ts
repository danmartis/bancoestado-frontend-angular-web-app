import { Component, OnInit, Input } from '@angular/core';
import { GestorContenidoService } from '../../../../../shared/services/gestor-contenido.service';

@Component({
  selector: 'app-banner-feature',
  templateUrl: './banner-feature.component.html',
  styleUrls: ['./banner-feature.component.scss']
})
export class BannerFeatureComponent implements OnInit {

  @Input() banners : string;
  constructor(private gestorContenido: GestorContenidoService) { }

  ngOnInit() {
  }
}