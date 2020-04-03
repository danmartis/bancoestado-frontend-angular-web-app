import { BffClientService } from '../bffClient.service';
import { Observable } from 'rxjs';
import { DataResponse } from '../dataResponse';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
  })
export class UsersService extends BffClientService {

  public getUsers(rut): Observable<DataResponse> {
    const urlApi = environment.DOMAIN_LOCAL+"maintainerUser/getUser";
    //const urlApi = "http://localhost:8080/bff/se-bff-empresas/v1/maintainerUser/getUser";
    let body = {
        rut
    }
    return this.http.post(urlApi, body, { headers: this.getHeaders(), observe: 'response' })
      .map(this.okData)
      .catch(this.errorData)
      .finally(() => {});
  }

  public updateUsers(dataUser): Observable<DataResponse> {
    const urlApi = environment.DOMAIN_LOCAL+"maintainerUser/updateUser";
    //const urlApi = "http://localhost:8080/bff/se-bff-empresas/v1/maintainerUser/getUser";
    let body = {
      email: dataUser.email,
      rut: dataUser.rut,
      roles: [
        {
          "id": 2,
          "role": "Consultor"
        }
      ],
      contact: "Si",
      contactType: "Contacto Operacional"
    };
    return this.http.put(urlApi, body, { headers: this.getHeaders(), observe: 'response' })
      .map(this.okData)
      .catch(this.errorData)
      .finally(() => {});
  }

  public registerNewUser(data): Observable<DataResponse> {
      const urlApi = environment.DOMAIN_LOCAL+"maintainerUser/registerNewUser";
     //const urlApi = "http://localhost:8080/bff/se-bff-empresas/v1/maintainerUser/registerNewUser";
     let body = {
         data
     }
     console.log( "url",urlApi );
     console.log( "body",body );
     return this.http.post(urlApi, body, { headers: this.getHeaders(), observe: 'response' })
       .map(this.okData)
       .catch(this.errorData)
       .finally(() => {});
   }

}