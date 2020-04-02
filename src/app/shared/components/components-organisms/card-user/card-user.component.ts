import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonalService } from 'src/app/enterprises/public/components/personal-config/services/personal.service';

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
  @Input() role: '' | 'userLogin' | 'Administrador';
  @Output() editUserEv = new EventEmitter();
  @Output() deleteUserEv = new EventEmitter();

  protected editUser: boolean = false;
  protected deleteUser: boolean = false;

  constructor(private personalService: PersonalService) { }

  ngOnInit() {
  }

  handleEditUser(data) {
    this.personalService.dataUserEdit = data;
    this.editUserEv.emit(this.editUser);
  }

  handleDeleteUser() {
    this.deleteUserEv.emit(this.deleteUser)
  }
}
