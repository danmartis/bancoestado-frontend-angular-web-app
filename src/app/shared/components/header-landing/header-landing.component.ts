import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.scss'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class HeaderLandingComponent implements OnInit {


  @Input() isUserLoggedIn : boolean;
  @Input() publicMenuAsync : any;
  @Input() privateMenuAsync : any;

  protected publicMenu : any;
  protected privateMenu : any;
  protected userData : any;

  // false is close sidebar
  sidebarStatus : boolean = false;
  sidebarShadow : boolean = false;


  constructor(private router: Router, protected _authServices: AuthService) {
    console.log(_authServices)

    this.publicMenu = [
      {
        route: '/',
        text: 'Inicio'
      },
      {
        route: '/nosotros',
        text: 'Quiénes Somos'
      },
      {
        route: '/empresas/ayuda',
        text: 'Ayuda'
      },
      {
        route: '/empresas/iniciar-sesion',
        text: 'Ingresar'
      }, 
    ];

    this.privateMenu = {
      menu: [
        {
          route: '/empresas/resumen',
          text: 'Resumen'
        },
        {
          route: '/empresas/convenios',
          text: 'Mis Convenios'
        },
        {
          route: '/empresas/nominas',
          text: 'Nóminas'
        },
        {
          route: '/empresas/reportes',
          text: 'Reportes'
        },
      ],
      userMenu: [
        {
          icon: 'perm_identity',
          route: '/empresas/configuracion-personal',
          text: 'Configuracion Personal'
        }
      ],
      userData: {
        img: 'assets/imgs/usuario.png',
        name: 'Usuario Ejemplo',
        biller: 'Empresa Ejemplo'
      }
    }
  }

  ngOnInit() {   
    
    window.addEventListener('scroll', (evt) => {
      const doc = document.documentElement;
      const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      this.sidebarShadow = top > 1;
    });
  }

  perfilDropToggle($event: any) {  
    $event.stopPropagation();
    const perfilDrop = document.getElementsByClassName('header__my-profile__dropdown');
    perfilDrop[0].classList.toggle('active');
  }

  onClick() {
    const perfilDrop = document.getElementsByClassName('header__my-profile__dropdown');
    perfilDrop[0] && perfilDrop[0].classList.remove('active');
  }
  

  toggleSidebarStatus() {
    this.sidebarStatus = !this.sidebarStatus;
  }

  getSidebarStatus() {
    return this.sidebarStatus;
  }

  goToLanding() {
    this.router.navigate(['']);
  }

  goToLogin(){
    this.router.navigate(['/iniciar-sesion']);
  }

  handleLogout() {
    if (this._authServices.isLogged) {
      this._authServices.isLogged = false;
      localStorage.removeItem('currentUser');
      
      setTimeout(() => {
        this.goToLanding();
      }, 500);
    }
  }
}
