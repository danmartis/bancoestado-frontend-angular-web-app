import { Injectable } from '@angular/core';
import { DataResponse } from './dataResponse';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { BffClientService } from './bffClient.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import {HttpResponse} from "@angular/common/http";

@Injectable()
export class ConveniosService extends BffClientService {

    PATH_URL = environment.swagger_convenio;
    public urlPath = 'https://desa-plataformadigital.banco.bestado.cl/bff/v1/se-personas-bff/convenios';
    // public urlPath = 'http://localhost:6969/convenios';

    public convenio(): Observable<DataResponse> {
        const urlApi = this.urlPath;

        return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
            .map(this.okData)
            .catch(this.errorData)
            .finally(() => { });
    }

    public getConvenio(id: number): Observable<DataResponse> {
        const urlApi = this.urlPath + `/${ id }`;

        return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
            .map(this.okData)
            .catch(this.errorData)
            .finally(() => { });
    }
}