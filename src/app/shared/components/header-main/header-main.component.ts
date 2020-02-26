import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class HeaderMainComponent implements OnInit {

  // false is close sidebar
  sidebarStatus : boolean = false;
  sidebarShadow : boolean = false;
  constructor(private router: Router) { }

  perfilDropToggle($event) {  
    $event.stopPropagation();
    const perfilDrop = document.getElementsByClassName('header__perfil__dropdown');
    perfilDrop[0].classList.toggle('header__perfil__dropdown--active');
  }

  onClick() {
    const perfilDrop = document.getElementsByClassName('header__perfil__dropdown');
    perfilDrop[0].classList.remove('header__perfil__dropdown--active');
  }
  ngOnInit() {
    
    window.addEventListener('scroll', (evt) => {
      const doc = document.documentElement;
      // const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      // console.log(top, left);
      this.sidebarShadow = top > 1;
    });
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
    this.router.navigate(['login/login-se']);
  }
}
