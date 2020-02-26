import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-se',
  templateUrl: './login-se.component.html',
  styleUrls: ['./login-se.component.scss']
})
export class LoginSeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['home-account/home']);
  }

}
