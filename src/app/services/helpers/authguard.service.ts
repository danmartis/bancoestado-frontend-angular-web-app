
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router,
    private authenticationService: AuthService) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log('can acivate ')

      if (currentUser) {

          this.authenticationService.loginGuard(currentUser);
          this.authenticationService.isLogged = true;

          console.log(currentUser)
    

          return true;
      }

      this.router.navigate(['/empresas/iniciar-sesion'], { queryParams: { returnUrl: state.url } });

      console.log(state.url);

      this.authenticationService.isLogged = false;
     
      return false;
  }
}
