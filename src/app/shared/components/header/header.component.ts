import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // false is close sidebar
  sidebarStatus : boolean = false;
  sidebarShadow : boolean = false;
  constructor() { }

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
}
