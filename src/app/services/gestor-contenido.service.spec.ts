/*import { Observable } from "rxjs";
import { DataResponse } from "./dataResponse";
import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { GestorContenidoService } from './gestor-contenido.service';

describe('GestorContenidoService', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [],
      providers: [
        GestorContenidoService,
        { provide: HttpClient, useClass: HttpClientMock },
      ]
    });
  }));

  it('should be created', inject([GestorContenidoService], (service: GestorContenidoService) => {
    expect(service).toBeTruthy();
  }));

});

class FixtureCobro {
  DATA_OK = {
    "code": "DRU",
    "state": "OK",
    "message": "Listado contenido",
    "data": {
        "banner": [{
                "key": "BANNER_1",
                "value": "Haz que tus clientes paguen en un sólo lugar."
            },
            {
                "key": "BANNER_2",
                "value": "Si eres PYME o Empresa, en "
            },
            {
                "key": "BANNER_3",
                "value": "ServiEstado "
            },
            {
                "key": "BANNER_4",
                "value": "te ofrecemos un convenio de recaudación "
            },
            {
                "key": "BANNER_5",
                "value": "a tu medida. "
            },
            {
                "key": "BANNER_6",
                "value": "Me interesa "
            }
        ],
        "benefits": [{
                "title": "Gestión fácil",
                "description": "de tus convenios, facturaciones, comprobantes y nóminas de recaudación.",
                "iconSrc": "/assets/imgs/svg/icono_gestion.svg",
                "lineColor": "#FFB842"
            },
            {
                "title": "Trazabilidad y visibilidad",
                "description": "de todos los procesos, hasta el abono de las recaudaciones en la cuenta que indiques.",
                "iconSrc": "/assets/imgs/svg/icono_trazabilidad.svg",
                "lineColor": "#1E63F8"
            },
            {
                "title": "Seguridad y respaldo",
                "description": "un ejecutivo siempre estará dispuesto a resolver tus dudas.",
                "iconSrc": "/assets/imgs/svg/icono_seguridad.svg",
                "lineColor": "#00D692"
            }
        ],
        "feature": [{
                "key": "FEATURE_1",
                "value": "Recauda a la medida de tu empresa"
            },
            {
                "key": "FEATURE_2",
                "value": "En ServiEstado disponemos de múltiples tipos de recaudación. Además contamos con diversos servicios adicionales como: boleta personalizada, mensajería SMS, etc."
            },
            {
                "key": "FEATURE_3",
                "value": "Aprovecha las ventajas de ser cliente BancoEstado"
            },
            {
                "key": "FEATURE_4",
                "value": "En ServiEstado disponemos de múltiples tipos de recaudación. Además contamos con diversos servicios adicionales como: boleta personalizada, mensajería SMS, etc."
            },
            {
                "key": "FEATURE_5",
                "value": "Prueba de segundo párrafo. En ServiEstado disponemos de múltiples tipos de recaudación."
            }
        ]
    }
}
}

class HttpClientMock {

  fixture = new FixtureCobro();

  get(build: string, header: object) {
    const httpResponse = {
      'body': {
        'codigo': 'SVE.OC.000',
        'mensaje': '',
        'data': this.fixture.DATA_OK
      },
      'ok': true,
      'status': 200,
      'statusText': "OK",
      'type': 4
    }
    return Observable.of(httpResponse);
  };
}

export class GestorContenidoServiceMock extends GestorContenidoService {

  fixture = new FixtureCobro();

  public GestorContenidoService(): Observable<DataResponse> {
    const response = new DataResponse(
      true,
      'SVE.OCCC.000',
      'Se obtuvo cuenta por cliente y convenio con éxito',
      this.fixture.DATA_OK);
    return Observable.of(response);
  }
}
*/