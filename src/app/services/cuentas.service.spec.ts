import { Observable } from "rxjs";
import { DataResponse } from "./dataResponse";
import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CuentasService } from './cuentas.service';

describe('CuentasService', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [],
      providers: [
        CuentasService,
        { provide: HttpClient, useClass: HttpClientMock },
      ]
    });
  }));

  it('should be created', inject([CuentasService], (service: CuentasService) => {
    expect(service).toBeTruthy();
  }));

  /*it('should get the menus correctly, from backend and from memory',
        inject([CuentasService], (service: CuentasService) => {
            // Primera llamada debería obtener de mock backend
            service.cuenta(101,'111111111').subscribe(
                res => {
                    expect(res).toBeTruthy();
                },
                err => {
                    console.log('Error en llamado a service', err);
                    expect(err).toBeFalsy();
                },
            );
        }));


  it('funcion CuentasService', inject([CuentasService], (service: CuentasService) => {
    service.cuenta(101,'111111111');
  }));

  it('should get the menus correctly, from backend and from memory',
    inject([CuentasService], (service: CuentasService) => {
      // Primera llamada debería obtener de mock backend
      service.cuenta(5638, "111111111").subscribe(
        res => {
          expect(res).toBeTruthy();
        },
        err => {
          console.log('Error en llamado a service', err);
          expect(err).toBeFalsy();
        },
      );
    }));*/
});

class FixtureCobro {
  DATA_OK = {
    "idConvenio": 101,
    "idCliente": "111111111",
    "montoPorDefecto": 10000
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

export class CuentasServiceMock extends CuentasService {

  fixture = new FixtureCobro();

  public cuenta(idConvenio:number, idCliente:string): Observable<DataResponse> {
    const response = new DataResponse(
      true,
      'SVE.OCCC.000',
      'Se obtuvo cuenta por cliente y convenio con éxito',
      this.fixture.DATA_OK);
    return Observable.of(response);
  }
}
