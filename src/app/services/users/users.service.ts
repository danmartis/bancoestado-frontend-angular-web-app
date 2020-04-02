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
    console.log(environment)
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

}