import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { GestorContenidoService } from '../../../../shared/services/gestor-contenido.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  dataGestorContenido = new Array();
  
  constructor(protected modalService:ModalService,private gestorContenido: GestorContenidoService) { }

  ngOnInit() {
    this.contenido();
  }
  
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  async contenido(){
    await this.gestorContenido.gestorContenido().subscribe( res => {
      res.getDetalle().forEach(element => {
        this.dataGestorContenido[element.key] = element.value;
      });
      console.log('data', this.dataGestorContenido);
    }),
    err => {
      console.log('err', err);
      return err;
    }
  }
}
