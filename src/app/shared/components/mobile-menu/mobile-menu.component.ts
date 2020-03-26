import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @Input() isUserLoggedIn : boolean = false;
  @Input() privateMenu : any;
  @Input() publicMenu : any;
  @Input() showMyProfileMenu : boolean = false;
  @Input() status : boolean;
  @Output() userLogoutEv = new EventEmitter();

  protected isUserLoggedOut = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public getStatusCss() {
    return this.status ? 'sidebar--open' : 'sidebar--close';
  }

  goToLanding() {
    this.router.navigate(['']);
  }

  handleLogout() {

  }

  userLogout() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
    this.userLogoutEv.emit(this.isUserLoggedIn);
  }
}
