import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from '../login/services/model/login.model';
// import { AuthService } from '../../../../services/authentication/auth.service';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-personal-config',
  templateUrl: './personal-config.component.html',
  styleUrls: ['./personal-config.component.scss']
})
export class PersonalConfigComponent implements OnInit {

  // protected _user: User;
  protected isEditingProfile: boolean = false;

  protected userTypes: Array<any> = [];
  protected newUserRegistered: boolean = false;
  protected modalName: string = 'personal-config__modal';
  protected selectedMenuItem: string = 'mi-perfil';
  protected assignContact: boolean = false;

  constructor(/*private _authService: AuthService,*/ private modalService: ModalService, private router: Router) {
    
    this.userTypes = [
      {
        name:'Administrador',
        value:'admin'
      },
      {
        name:'Operador',
        value:'operador'
      },
      {
        name:'Autorizador',
        value:'authorizdor'
      }
    ];
  }

  ngOnInit() {
    // this.getCurrentUser()
    this.menuItemSel();
    this.router.events.subscribe((val) => {
      this.menuItemSel();
  });
  }

  menuItemSel() {
    if (this.router.url.includes('mi-perfil')) {
      this.selectedMenuItem = 'mi-perfil';
    } else if (this.router.url.includes('usuarios')) {
      this.selectedMenuItem = 'usuarios';
    } else {
      this.selectedMenuItem = '';
    }
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
 
  /*
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
  */

  // MODAL
  toggleModal() {
    this.modalService.toggle(this.modalName);
  }

  closeModal() {
    this.modalService.toggle(this.modalName);
  }

  handleCreateUser() {
    this.newUserRegistered = true;
  }

  handleUserRegCompleted() {
    this.newUserRegistered = false;
    this.closeModal();
  }

  handleAssignContact() {
    this.assignContact = !this.assignContact;
  }

}
