import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Observable } from 'rxjs';
import { BffClientService } from '../../../../../services/bffClient.service';
import { User } from './model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BffClientService {

  changePassword: boolean = false;

  constructor(private _httpClient: HttpClient) { super(_httpClient) }

  loginUser(login): Promise<User> {
    console.log(login)
    return new Promise((resolve, reject) => {
      this._httpClient.post(environment.DOMAIN_LOCAL + 'login', login)
        .subscribe((response: User) => {
          console.log(response)
          resolve(response);
        }, reject);
    });
  };

  getUser(id: number): Observable<User> {
    return this._httpClient.get(`${environment.DOMAIN_LOCAL}/registro-biller/${id}`)
      .map((resp: any) => resp.user)
      .catch(this.errorData)
      .finally(() => { });
  };

}
