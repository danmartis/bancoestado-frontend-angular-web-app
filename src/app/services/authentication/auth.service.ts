import { Injectable } from "@angular/core";
import { User } from "src/app/enterprises/public/components/login/services/model/login.model";
import { environment } from "src/environments/environment.dev";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { BffClientService } from '../bffClient.service';

@Injectable({
  providedIn: "root"
})
export class AuthService extends BffClientService {
  isLogged: boolean = false;
  loading: boolean = false;
  _user: User;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private _httpClient: HttpClient) { super (_httpClient)
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  loginUser(login): Promise<User> {
    console.log(login);

    login.rut.replace(/[.]/g, "");

    const newRut = login.rut.replace(/[.]/g, "");

    console.log("newrut", newRut);

    return new Promise((resolve, reject) => {
      this._httpClient.post(environment.DOMAIN_LOCAL + "login", {rut: newRut, email: login.email, password: login.password})
        .subscribe((user: any) => {
          localStorage.setItem("currentUser", JSON.stringify(user.data.data));
          this.currentUserSubject.next(user.data.data);

          console.log(" this.currentUserSubject", this.currentUserSubject);

          resolve(user);
        }, reject);
    });
  }

  loginGuard(user) {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(email: string, rut:string): Promise<User> {
    rut.replace(/[.]/g, "");

    const newRut = rut.replace(/[.]/g, "");

    return new Promise((res, rej) => {
      this._httpClient.post(`${environment.DOMAIN_LOCAL}/maintainerUser/personalInformation`,{ email: email, rut: newRut })
      .subscribe((user: any) => {
        user = user.data.data;
        res(user);
      }, rej);
    });
  };
      
}
