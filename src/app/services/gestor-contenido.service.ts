import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BffClientService } from './bffClient.service';
import { DataResponse } from './dataResponse';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
    providedIn: 'root'
  })
  export class GestorContenidoService extends BffClientService {
    routeParams: any;

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {

        this.routeParams = route.params;

        console.log(this.routeParams)

        this.selectItem = Number(this.routeParams.idItem);
        this.selectQuestion = Number(this.routeParams.idQuestion);

    }
    
    selectItem :number = 0
    selectQuestion: number = 0;
  
    // public urlPath = 'http://se-empresas-bff-desa.us-east-1.elasticbeanstalk.com/bff/se-bff-empresas/v1/gestor-contenido/';
    public urlPath = 'http://localhost:8000/bff/se-bff-empresas/v1/gestor-contenido/';
  
    public getLanding(): Observable<DataResponse> {
      const urlApi = this.urlPath+"landing";
  
      return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
        .map(this.okData)
        .catch(this.errorData)
        .finally(() => {});
    }
    public getQuestions(): Observable<DataResponse> {
      const urlApi = this.urlPath+"questions";
    
      return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
        .map(this.okData)
        .catch(this.errorData)
        .finally(() => {});
    }
    public getQuestionsDetails(): Observable<DataResponse> {
      const urlApi = this.urlPath+"question-details";
    
      return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
        .map(this.okData)
        .catch(this.errorData)
        .finally(() => {});
    }
    public getVideos(): Observable<DataResponse> {
      const urlApi = this.urlPath+"videos";
    
      return this.http.get(urlApi, { headers: this.getHeaders(), observe: 'response' })
        .map(this.okData)
        .catch(this.errorData)
        .finally(() => {});
    }
  }