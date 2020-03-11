import { Observable } from "rxjs";
import { DataResponse } from "./dataResponse";
import { ComprobanteService } from "./comprobante.service";
import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import 'rxjs/add/observable/of';

describe('ComprobanteService', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
            ],
            declarations: [],
            providers: [
                ComprobanteService,
                { provide: HttpClient, useClass: HttpClientMock },
            ]
        });
    }));

    it('should be created', inject([ComprobanteService], (service: ComprobanteService) => {
        expect(service).toBeTruthy();
    }));
})

class FixtureComprobante {
    DATA_OK =
        {
            "comprobante": [
                {
                    "idTransaccion": 135792469,
                    "montoTotalPagado": 24980,
                    "cuentaPago": 18362578,
                    "nroDocumentos": 2,
                    "fecha": "06/01/2020",
                    "hora": "15:42:34",
                    "detalle": [
                        {
                            "idCliente": "185617600",
                            "nombreAlias": "mi cuenta",
                            "empresa": "Movistar",
                            "convenio": "Movistar Hogar",
                            "nroDocumento": 12345678,
                            "montoPagado": 9990,
                            "correlativo": 1
                        },
                        {
                            "idCliente": "185617601",
                            "nombreAlias": "mi telefono",
                            "empresa": "Movistar",
                            "convenio": "Movistar Hogar",
                            "nroDocumento": 99969999,
                            "montoPagado": 14990,
                            "correlativo": 2
                        }
                    ]
                }
            ]


        }
}

class HttpClientMock {
    fixture = new FixtureComprobante();

    get(url: string, options: any): Observable<any> {
        const httpResponse = {
            'body': {
                'codigo': 'SVE.OCBTE.000',
                'mensaje': 'Se obtuvo comprobante con éxito',
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

export class ComprobanteServiceMock extends ComprobanteService {
    fixture = new FixtureComprobante();

    public comprobante(idComprobante:number): Observable<DataResponse> {
        const response = new DataResponse(
            true,
            'SVE.OCBTE.000',
            'Se obtuvo comprobante con éxito',
            this.fixture.DATA_OK);
        return Observable.of(response);
    }

    public sendComprobante(body: any): Observable<DataResponse> {
        const response = new DataResponse(
            true,
            'SVE.EC.000',
            'Se programó envió comprobante con éxito',
            { "idTransaccion": 135792468, "correo": "jperez@bancoestado.cl" });
        return Observable.of(response);
    }
}