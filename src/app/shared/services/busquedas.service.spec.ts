import { Observable } from "rxjs";
import { DataResponse } from "./dataResponse";
import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import 'rxjs/add/observable/of';
import { BusquedasService } from './busquedas.service';

describe('BusquedasService', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [],
      providers: [
        BusquedasService,
        { provide: HttpClient, useClass: HttpClientMock },
      ]
    });
  }));

  it('should be created', inject([BusquedasService], (service: BusquedasService) => {
    expect(service).toBeTruthy();
  }));

  /*it('should get the menus correctly, from backend and from memory',
    inject([BusquedasService], (service: BusquedasService) => {
      // Primera llamada debería obtener de mock backend
      const data = [{ id: 'rut', valor: '111111111'}]
      service.busqueda(101, data).subscribe(
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
    "idCliente": "11111111-1",
    "montoPorDefecto": 10000
  }
}

class HttpClientMock {

  fixture = new FixtureCobro();

  post(build: string, header: object) {
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
    };
    return Observable.of(httpResponse);
  }
}

export class BusquedaServiceMock extends BusquedasService {

  fixture = new FixtureCobro();

  public busquedas(idConvenio:number, idCliente:string): Observable<DataResponse> {
    const response = new DataResponse(
      true,
      'SVE.OBC.000',
      'Se obtuvo busqueda por convenio con éxito',
      this.fixture.DATA_OK);
    return Observable.of(response);
  }
}
