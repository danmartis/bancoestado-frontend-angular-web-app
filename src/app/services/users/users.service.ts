import { BffClientService } from '../bffClient.service';
import { Observable } from 'rxjs';
import { DataResponse } from '../dataResponse';
import { environment } from 'src/environments/environment.dev';
import { AuthService } from '../../services/authentication/auth.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: "root"
  })
export class UsersService extends BffClientService {

    private _authService: AuthService;
    
    public getUsers(rut): Observable<DataResponse> {
       // const urlApi = environment.DOMAIN_LOCAL+"maintainerUser/getUser";
        const urlApi = "http://localhost:8080/bff/se-bff-empresas/v1/maintainerUser/getUser";
        let body = {
            rut
        }
        console.log( "url",urlApi );
        console.log( "body",body );
        return this.http.post(urlApi, body, { headers: this.getHeaders(), observe: 'response' })
          .map(this.okData)
          .catch(this.errorData)
          .finally(() => {});
      }
}