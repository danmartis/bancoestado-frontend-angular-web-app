import { TestBed, inject } from '@angular/core/testing';

import { RegistroSeService } from './registro-se.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataResponse } from './dataResponse';
import { Observable } from 'rxjs';

describe('RegistroSeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    declarations: [],
    providers: [
      RegistroSeService, { provide: HttpClient, useClass: HttpClientMock }
    ]
  }));

  it('should be created', inject([RegistroSeService], (service: RegistroSeService) => {
    expect(service).toBeTruthy();
  }));
});

class HttpClientMock {
  registroInicial(body: any): Observable<any> {
    const httpResponse = {
      'body': {
        'codigo': 'SVE.RISE.000',
        'mensaje': 'Usuario registrado correcto, se envio correo de validación',
        'data': {}
      },
      'ok': true,
      'status': 200,
      'statusText': "OK",
      'type': 4
    }
    return Observable.of(httpResponse);
  }

  registroValidacion(body: any): Observable<any> {
    const httpResponse = {
      'body': {
        'codigo': 'SVE.RVSE.000',
        'mensaje': 'Código coincide',
        'data': {}
      },
      'ok': true,
      'status': 200,
      'statusText': "OK",
      'type': 4
    }
    return Observable.of(httpResponse);
  }

  registroFinal(body: any): Observable<any> {
    const httpResponse = {
      'body': {
        'codigo': 'SVE.RFSE.000',
        'mensaje': 'Finalizo registro correctamente ',
        'data': {}
      },
      'ok': true,
      'status': 200,
      'statusText': "OK",
      'type': 4
    }
    return Observable.of(httpResponse);
  }
}

export class RegistroSeServiceMock extends RegistroSeService {

  public registroInicial(body: any): Observable<DataResponse> {
    const response = new DataResponse(
      true,
      'SVE.RISE.000',
      'Usuario registrado correcto, se envio correo de validación',
      {}
    );
    return Observable.of(response);
  }

  public registroValidacion(body: any): Observable<DataResponse> {
    const response = new DataResponse(
      true,
      'SVE.RVSE.000',
      'Código coincide',
      {}
    );
    return Observable.of(response);
  }

  public registroFinal(body: any): Observable<any> {
    const response = new DataResponse(
      true,
      'SVE.RFSE.000',
      'Finalizo registro correctamente ',
      {}
    );
    return Observable.of(response);
  }
}
