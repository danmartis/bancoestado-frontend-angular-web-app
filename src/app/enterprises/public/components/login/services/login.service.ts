import { Injectable } from "@angular/core";
import { AuthService } from "src/app/services/authentication/auth.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  changePassword: boolean = false;

  constructor(private _authService: AuthService) {}

  loginUser(login) {
    console.log(login);

    login.rut.replace(".", "");

    const newRut = login.rut.replace(".", "");

    console.log("newrut", newRut);

    const obj = { rut: newRut, email: login.email, password: login.password };

    this._authService
      .loginUser(obj)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment.dev';
// import { BffClientService } from '../../../../../services/bffClient.service';
// import { User } from './model/login.model';
// import { AuthService } from 'src/app/services/authentication/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService extends BffClientService {

//   changePassword: boolean = false;

//   constructor(private _httpClient: HttpClient, private _authService: AuthService) { super(_httpClient ) }

//   loginUser(login){
//     console.log(login)

//     login.rut.replace(".", "")

//     const newRut = login.rut.replace(".", "")

//      console.log('newrut', newRut)

//      const obj = {rut:newRut , email: login.email, password: login.password}

//      this._authService.loginUser(obj)
//      .then((res) => {
//        console.log(res)
//      })
//      .catch((err) => {
//        console.log(err)
//      })
//     }

//   getUser(data): Promise<User> {
//     return new Promise((resolve, reject) => {
//       this._httpClient.post(`${environment.DOMAIN_LOCAL}/maintainerUser/personalInformation`, {email: data.email, rut: data.rut})

//     });
//     // return this._httpClient.get(`${environment.DOMAIN_LOCAL}/registro-biller/${id}`)
//     //   .map((resp: any) => resp.user)
//     //   .catch(this.errorData)
//     //   .finally(() => { });
//   };

// }
