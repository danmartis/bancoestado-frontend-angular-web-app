import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BffClientService } from './bffClient.service';
import { DataResponse } from './dataResponse';

@Injectable({
  providedIn: 'root'
})
export class BusquedasService extends BffClientService {

  public urlPath = 'https://desa-plataformadigital.banco.bestado.cl/bff/v1/se-portal-empresas-bff/busqueda';
  // public urlPath = 'http://localhost:6969/busqueda';

  public busqueda(idConvenio: number, data): Observable<DataResponse> {
    const urlApi = this.urlPath + `/${idConvenio}`;

    return this.http.post(urlApi, data, { headers: this.getHeaders(), observe: 'response' })
      .map(this.okData)
      .catch(this.errorData)
      .finally(() => {});
  }

}
