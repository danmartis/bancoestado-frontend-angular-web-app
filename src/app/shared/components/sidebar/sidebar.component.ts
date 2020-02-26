import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  @Input() status : boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public getStatusCss() {
    return this.status ? 'sidebar--open' : 'sidebar--close';
  }

  goToLogin(){
    this.router.navigate(['login/login-se']);
  }

}
