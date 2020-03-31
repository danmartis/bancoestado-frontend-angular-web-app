import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {

  @Input() protected userData: any;
  @Input() topBadge: '' | 'top-left' | 'top-center' | 'top-right' | 'none' = '';
  @Input() bottomBadge: '' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'none' = '';
  @Input() topBadgeData: string = '';
  @Input() bottomBadgeData: string = '';
  @Input() profile: '' | 'users-list' | 'biller' | 'user' = 'user';

  // protected openDropDown: boolean = false;


  constructor() { }

  ngOnInit() {

  }

  /*
  handleDropdownMenu($event: any) {
    $event.stopPropagation();
    this.openDropDown = !this.openDropDown;
  }
  onClick($event: any) {
    $event.stopPropagation();
    if (this.openDropDown) {
      this.handleDropdownMenu($event);
    }
  }
  */
}
