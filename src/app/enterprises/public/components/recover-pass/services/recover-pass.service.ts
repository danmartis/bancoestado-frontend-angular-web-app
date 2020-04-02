import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecoverPassService {

  constructor(private _httpClient: HttpClient) { }

  recoverPass(rut, email): Promise<any> {
    console.log(email, rut);
    return new Promise((resolve, reject) => {

      this._httpClient.post(environment.DOMAIN_LOCAL + '/login/recover-password', {rut: rut, email: email, })
        .subscribe((user: any) => {
     

          console.log(user)
          resolve(user);
        }, reject);
    });
  }

}
