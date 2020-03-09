import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BffClientService } from './bffClient.service';
import { DataResponse } from './dataResponse';

@Injectable({
    providedIn: 'root'
  })

  export class GestorContenidoService extends BffClientService {
  
    public urlPath = 'http://se-empresas-bff-desa.us-east-1.elasticbeanstalk.com/bff/se-bff-empresas/v1/gestor-contenido';
    //public urlPath = 'http://localhost:3000/bff/se-bff-empresas/v1/gestor-contenido/';
  
    public gestorContenido(): Observable<DataResponse> {
      const urlApi = this.urlPath;
  
      return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
        .map(this.okData)
        .catch(this.errorData)
        .finally(() => {});
    }

    public getLanding(): Observable<DataResponse> {
      const urlApi = this.urlPath+"landing";
  
      return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
        .map(this.okData)
        .catch(this.errorData)
        .finally(() => {});
    }

    public getHelp(): Observable<DataResponse> {
      const urlApi = this.urlPath+"help";
    
      return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
        .map(this.okData)
        .catch(this.errorData)
        .finally(() => {});
    }
  
  }