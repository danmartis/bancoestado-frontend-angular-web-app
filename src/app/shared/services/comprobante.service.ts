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
  export class ComprobanteService extends BffClientService {
  
    public urlPath = 'https://desa-plataformadigital.banco.bestado.cl/bff/v1/se-personas-bff/comprobante';
  
    public comprobante(idComprobante:number): Observable<DataResponse> {
      const urlApi = this.urlPath + `/${idComprobante}`;
  
      return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
          .map(this.okData)
          .catch(this.errorData)
          .finally(() => { });
    }

      
    public sendComprobante(body: any): Observable<DataResponse> {
      const urlApi = this.urlPath + `/send`;
  
      return this.http.post(urlApi, body, { headers: this.getHeaders(), observe: 'response' })
          .map(this.okData)
          .catch(this.errorData)
          .finally(() => { });
    }
  
  }