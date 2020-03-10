import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { GestorContenidoService } from '../../../../shared/services/gestor-contenido.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  private dataBanner = new Array();
  private dataBenefits = new Array();
  private dataFeature = new Array();

  
  constructor(protected modalService:ModalService,private gestorContenido: GestorContenidoService) { }

  ngOnInit() {
    this.contenido();
  }
  
  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  async contenido(){
    await this.gestorContenido.getLanding().subscribe( res => {
      res.getDetalle()["banner"].forEach(element => {
        this.dataBanner[element.key] = element.value;
      });
     
      this.dataBenefits = res.getDetalle()["benefits"];
      
      res.getDetalle()["feature"].forEach(element => {
        this.dataFeature[element.key] = element.value;
      });
    }),
    err => {
      console.log('err', err);
      return err;
    }
  }
}
