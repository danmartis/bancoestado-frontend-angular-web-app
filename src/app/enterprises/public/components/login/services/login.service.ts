import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { User } from './model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient,
    ) { }

  loginUser(login): Promise<User> {
    console.log(login)
    return new Promise((resolve, reject) => {
        this._httpClient.post(environment.DOMAIN_LOCAL + 'login', login)
            .subscribe((response: User) => {
              console.log(response)
                resolve(response);
            }, reject);
    });
}
}
