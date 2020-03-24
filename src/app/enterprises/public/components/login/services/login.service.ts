import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  changePassword: boolean = false;

  constructor( private _authService: AuthService
    ) { }

  loginUser(login){
    console.log(login)

    login.rut.replace(".", "")

    const newRut = login.rut.replace(".", "")
  
     console.log('newrut', newRut)

     const obj = {rut:newRut , email: login.email, password: login.password}

     this._authService.loginUser(obj)
     .then((res) => {
       console.log(res)
     })
     .catch((err) => {
       console.log(err)
     })


}
}
