import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataResponse } from './dataResponse';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../domain/cliente.class';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';

import { v4 as uuid } from 'uuid';
@Injectable()
export abstract class BffClientService {

    static xtrackid = uuid();

    constructor(protected http: HttpClient) { }

    protected static getHeadersAnonimo(funcionalidad, etapa, codigosesion): any {
        return {
            'Content-Type': 'application/json',
            'nombreaplicacion': 'PAGO20',
            'canal': '43',
            'codigosesion': codigosesion,
            'xtrackid': this.xtrackid,
            'funcionalidad': funcionalidad,
            'etapa': etapa
        };
    }

    protected getHeaders(): any {
        const cliente = Cliente.getInstance();
        console.log('cliente', cliente);
        return {
            'Content-Type': 'application/json',
            'nombreaplicacion': 'HOME20',
            'Authorization': cliente.token() || 'test',
            'canal': '43',
            'codigosesion': cliente.codigoSesion() || 'test',
            'xtrackid': uuid()
        };
    }

    protected okData<T>(res: HttpResponse<any>): DataResponse {
        const respuesta: any = res;
        console.log('Code status:', res.status);
        if (respuesta === null || respuesta.status !== 200) {
            throw res;
        }
        const ret: DataResponse = new DataResponse(
          true,
          respuesta.body['codigo'],
          respuesta.body['mensaje'],
          respuesta.body['data']
        );
        return ret;
    }

    /**
     * @method okData
     * Metodo que genera una estructura de respuesta satisfactoria
     * en caso de tener exito en la consulta del servicio por consulta post
     * @param res
     * @returns AutenticacionResponse
     */

    protected errorData(error: Response | any): Observable<DataResponse> {
        // console.debug('ErrorResponse', error);
        const body = error;
        const msg = 'En estos momentos no lo podemos atender, favor intente más tarde';

        const ret: DataResponse = new DataResponse(
          false,
          '',
          msg,
          body
        );
        return Observable.throw(ret);
    }

    protected buildUrl(basePath: string, path: string): string {
        return basePath + path;
    }
}
