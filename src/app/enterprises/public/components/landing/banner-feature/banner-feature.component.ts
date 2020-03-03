import { Component, OnInit } from '@angular/core';
import { GestorContenidoService } from '../../../../../shared/services/gestor-contenido.service';

@Component({
  selector: 'app-banner-feature',
  templateUrl: './banner-feature.component.html',
  styleUrls: ['./banner-feature.component.scss']
})
export class BannerFeatureComponent implements OnInit {

  constructor(private gestorContenido: GestorContenidoService) { }

  ngOnInit() {
    const resultado = this.contenido();
    console.log('resultado',resultado);
  }

  async contenido(){
    
    await this.gestorContenido.gestorContenido().subscribe( res => {
      console.log('res.getDetalle()', res);
      return res.getDetalle();
    }),
    err => {
      console.log('err', err);
      return err;
    }

  }
}