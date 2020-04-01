import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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

  @Output() editUserEv = new EventEmitter();
  @Output() deleteUserEv = new EventEmitter();

  protected editUser: boolean = false;
  protected deleteUser: boolean = false;

  // protected openDropDown: boolean = false;


  constructor() { }

  ngOnInit() {

  }

  handleEditUser() {
    this.editUserEv.emit(this.editUser);
  }

  handleDeleteUser() {
    this.deleteUserEv.emit(this.deleteUser)
  }
}
