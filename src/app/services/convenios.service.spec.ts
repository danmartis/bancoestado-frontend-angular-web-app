import { Observable } from "rxjs";
import { DataResponse } from "./dataResponse";
import { ConveniosService } from "./convenios.service";
import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import 'rxjs/add/observable/of';

describe('ConveniosService', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
            ],
            declarations: [],
            providers: [
                ConveniosService,
                { provide: HttpClient, useClass: HttpClientMock },
            ]
        });
    }));

    it('should be created', inject([ConveniosService], (service: ConveniosService) => {
        expect(service).toBeTruthy();
    }));

    /*it('should get the menus correctly, from backend and from memory',
        inject([ConveniosService], (service: ConveniosService) => {
            // Primera llamada debería obtener de mock backend
            service.convenio().subscribe(
                res => {
                    expect(res).toBeTruthy();
                },
                err => {
                    console.log('Error en llamado a service convenio', err);
                    expect(err).toBeFalsy();
                },
            );

            service.getConvenio(101).subscribe(
                res => {
                    expect(res).toBeTruthy();
                },
                err => {
                    console.log('Error en llamado a service getConvenio', err);
                    expect(err).toBeFalsy();
                },
            );

        }));*/
})

class FixtureCobro {
    DATA_OK =
      {
            "convenios": [
                {
                    "idConvenio": 101,
                    "servicio": "Movistar Hogar",
                    "empresa": "Movistar",
                    "logotipo": "https://ww2.movistar.cl/inc_header_footer_v8/assets/img/logo-movistar.svg",
                    "rubro": {
                        "idRubro": 10000,
                        "nombreRubro": "Telefonía Hogar",
                        "logotipo": "https://ww2.movistar.cl/inc_header_footer_v8/assets/img/logo-movistar.svg"
                    }
                },
                {
                    "idConvenio": 13511,
                    "servicio": "ENOR CHILE",
                    "empresa": "Enorchile S.A.",
                    "logotipo": "http://enorchile.cl/wp-content/uploads/2018/04/EnorLogo_pantone_en_tarjeta.png",
                    "rubro": {
                        "idRubro": 20000,
                        "nombreRubro": "Eléctrica",
                        "logotipo": "http://enorchile.cl/wp-content/uploads/2018/04/EnorLogo_pantone_en_tarjeta.png"
                    }
                },
                {
                    "idConvenio": 4588,
                    "servicio": "Metrogas",
                    "empresa": "Metrogas S.A",
                    "logotipo": "http://www.metrogas.cl/themes/hogar/home/img/header/metrogas-logo.png",
                    "rubro": {
                        "idRubro": 30000,
                        "nombreRubro": "Gas",
                        "logotipo": "http://www.metrogas.cl/themes/hogar/home/img/header/metrogas-logo.png"
                    }
                },
                {
                    "idConvenio": 3260,
                    "servicio": "Aguas Andinas",
                    "empresa": "Aguas Andinas S.A",
                    "logotipo": "https://www.aguasandinas.cl/aguascontema-theme/images/logo-aguasandinas.png",
                    "rubro": {
                        "idRubro": 40000,
                        "nombreRubro": "Agua",
                        "logotipo": "https://www.aguasandinas.cl/aguascontema-theme/images/logo-aguasandinas.png"
                    }
                },
                {
                    "idConvenio": 8220,
                    "servicio": "Autopista Central",
                    "empresa": "Autopista Central S.A",
                    "logotipo": "https://www.procapital.cl/wp-content/uploads/autopista-central.png",
                    "rubro": {
                        "idRubro": 50000,
                        "nombreRubro": "Autopista",
                        "logotipo": "https://www.procapital.cl/wp-content/uploads/autopista-central.png"
                    }
                },
                {
                    "idConvenio": 5638,
                    "servicio": "ABCDIN",
                    "empresa": "ABC",
                    "logotipo": "https://www.tutarjeta.cl/wp-content/uploads/2018/01/Abcdin_New_Logo.svg.png",
                    "rubro": {
                        "idRubro": 60000,
                        "nombreRubro": "Retail",
                        "logotipo": "https://www.tutarjeta.cl/wp-content/uploads/2018/01/Abcdin_New_Logo.svg.png"
                    }
                },
                {
                    "idConvenio": 8765,
                    "servicio": "Metro",
                    "empresa": "Metro S.A.",
                    "logotipo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Metro_de_Santiago_Logo.svg/500px-Metro_de_Santiago_Logo.svg.png",
                    "rubro": {
                        "idRubro": 70000,
                        "nombreRubro": "Transporte",
                        "logotipo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Metro_de_Santiago_Logo.svg/500px-Metro_de_Santiago_Logo.svg.png"
                    }
                },
                {
                    "idConvenio": 8764,
                    "servicio": "Meta",
                    "empresa": "Meta S.A.",
                    "logotipo": "https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png",
                    "rubro": {
                        "idRubro": 70000,
                        "nombreRubro": "Transporte",
                        "logotipo": "https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png"
                    }
                }
            ]
        }
}

class FixtureConvenio {
    DATA_OK = {
        "idConvenio": 101,
        "servicio": "Movistar Hogar",
        "empresa": "Movistar",
        "logotipo": "https://ww2.movistar.cl/inc_header_footer_v8/assets/img/logo-movistar.svg",
        "rubro": {
            "idRubro": 10000,
            "nombreRubro": "Telefonía Hogar",
            "logotipo": "https://ww2.movistar.cl/inc_header_footer_v8/assets/img/logo-movistar.svg"
        },
        "ayuda": {
            "nombreIdentificador": "N° de cliente",
            "tipoCodigo": "QR",
            "imagenAyuda": "https://ww2.movistar.cl/inc_header_footer_v8/assets/img/logo-movistar.svg",
            "busqueda": [
              {
                "nombre": "telefono",
                "tipo": "numerico",
                "placeholder": "Ingrese su telefono",
                "pattern": "[0-9]"
              }
            ]
        }
    }
}

class HttpClientMock extends HttpClient {

    fixture = new FixtureCobro();

    get(url: string, options: any): Observable<any> {
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
    }
}

export class ConveniosServiceMock extends ConveniosService {

    fixture = new FixtureCobro();

    public convenio(): Observable<DataResponse> {
        const response = new DataResponse(
          true,
          'SVE.OC.000',
          'Se obtuvo listado de convenios con éxito',
          this.fixture.DATA_OK);
        return Observable.of(response);
    }

    public getConvenio(id: number): Observable<DataResponse> {
        const fixtureConvenio = new FixtureConvenio();
        const response = new DataResponse(
          true,
          'SVE.OCI.000',
          'Se obtuvo convenio por id con éxito',
          fixtureConvenio.DATA_OK);
        return Observable.of(response);
    }
}
