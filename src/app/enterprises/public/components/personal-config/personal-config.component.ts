import { Component, OnInit } from '@angular/core';
import { User } from '../login/services/model/login.model';
import { AuthService } from '../../../../services/authentication/auth.service';

@Component({
  selector: 'app-personal-config',
  templateUrl: './personal-config.component.html',
  styleUrls: ['./personal-config.component.scss']
})
export class PersonalConfigComponent implements OnInit {

  protected _user: User;
  protected isEditingProfile : boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser()
  }

  handleEditProfile() {
    this.isEditingProfile = !this.isEditingProfile;
    console.log('personal-config this.isEditingProfile: ', this.isEditingProfile)
    if (this.isEditingProfile) {
      console.log('Editing Profile')
    } else {
      console.log('Save Profile changes')
    }
  }
 
  async getCurrentUser() {
    await this._authService.getCurrentUser(this._authService.currentUserValue.email, this._authService.currentUserValue.rut)
      .subscribe(_user => {
        this._user = _user;
        console.log(this._user)
      }), err => {
        return err;
      };
      return this._user;
  }

}
