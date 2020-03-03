import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrerService {

  constructor(private _httpClient: HttpClient,
    ) { }


  addRegister(register): Promise<any> {

    console.log(register)
    return new Promise((resolve, reject) => {
        this._httpClient.post('http://localhost:3000/bff/se-bff-empresas/v1/registro-biller', register)
            .subscribe((response: any) => {
              console.log(response)
                resolve(response);
            }, reject);
    });
}
}
