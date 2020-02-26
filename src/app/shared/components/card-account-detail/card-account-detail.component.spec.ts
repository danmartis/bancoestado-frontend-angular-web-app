import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountDetailComponent } from './card-account-detail.component';
import { ButtonComponent } from '../components-atom/button/button.component';
import { CardDefaultComponent } from '../components-atom/card-default/card-default.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from '../components-atom/icon/icon.component';
import { ParagraphComponent } from '../components-atom/paragraph/paragraph.component';
import { CheckboxComponent } from '../components-atom/checkbox/checkbox.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from 'src/app/domain/parametro.service';

describe('CardAccountDetailComponent', () => {
  let component: CardAccountDetailComponent;
  let fixture: ComponentFixture<CardAccountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardAccountDetailComponent,
        ButtonComponent,
        CardDefaultComponent,
        IconComponent,
        ParagraphComponent,
        CheckboxComponent
      ],
      imports: [
        NgbModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ParametroService, useClass: ParametroServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountDetailComponent);
    component = fixture.componentInstance;
    component.account = {
      clientNumber: "",
      title: "",
      value: 0,
      uniqueId: 0,
      type: "",
      selected:true,
      group:""
    };
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getColor', () => {
    component.getColor();
  });

  it('getIcon', () => {
    component.getIcon();
  });

  it('openEdit', () => {
    component.openEdit();
  });

  it('getValue', () => {
    component.getValue();
  });
  
  it('formatNumber', () => {
    component.formatNumber(1);
  });

  it('isInfo', () => {
    component.isInfo();
  });
  
  it('isGroup', () => {
    component.isGroup();
  });
  
  it('toggleGroupDetail', () => {
    component.toggleGroupDetail();
  });

  it('goToDetail', () => {
    component.goToDetail();
  });

});

export class ParametroServiceMock {
  mapParametros = new Map<string, any>();
  public addParametro(key: string, valor: any): void {
    this.mapParametros.set(key, valor);
  }
  public getParametro(key: string): any {
    const comprobante : any = 
      {
        comprobante : [{
          "idTransaccion" : 135792468,
          "montoTotalPagado": 9990,
          "cuentaPago": 18362578,
          "nroDocumentos": 1,
          "fecha": "",
          "hora": "",
          "detalle": [
            {
              "idCliente": "185617600",
              "nombreAlias": "Usuario Serviestado",
              "empresa": "Movistar",
              "servicio": "Movistar Hogar",
              "nroDocumento": 99969999,
              "montoPagado": 9990,
              "correlativo": 1
            }
          ]
      }]};
    return comprobante;
  }
  public deleteParametro(key: string): void {

  }
}
