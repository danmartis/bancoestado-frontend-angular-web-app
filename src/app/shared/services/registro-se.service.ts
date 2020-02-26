import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BffClientService } from './bffClient.service';
import { DataResponse } from './dataResponse';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class RegistroSeService extends BffClientService {

  public urlPath = 'https://desa-plataformadigital.banco.bestado.cl/bff/v1/se-personas-bff/registro-se/';

  public registroInicial(body: any): Observable<DataResponse> {
    const urlApi = this.urlPath + 'inicial'
    return this.http.post(urlApi, body, { headers: this.getHeaders(), observe: 'response' })
      .map(this.okData)
      .catch(this.errorData)
      .finally(() => {});
  }

  public registroValidacion(body: any): Observable<DataResponse> {
    const urlApi = this.urlPath + 'validacion'
    return this.http.post(urlApi, body, { headers: this.getHeaders(), observe: 'response' })
      .map(this.okData)
      .catch(this.errorData)
      .finally(() => {});
  }

  public registroFinal(body: any): Observable<any> {
    const urlApi = this.urlPath + 'fin'
    return this.http.post(urlApi, body, { headers: this.getHeaders(), observe: 'response' })
      .map(this.okData)
      .catch(this.errorData)
      .finally(() => {})
  }
}
