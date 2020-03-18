import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpClient: HttpClient,
    ) { }


  addRegister(register): Promise<any> {

    console.log(register)
    return new Promise((resolve, reject) => {
        this._httpClient.post(environment.DOMAIN_LOCAL+  'registro-biller', register)
            .subscribe((response: any) => {
              console.log(response)
                resolve(response);
            }, reject);
    });
}
}
