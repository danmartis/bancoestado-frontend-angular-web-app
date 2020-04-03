import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/authentication/auth.service';
import { ModalService } from '../../../../services/modal.service';
import { PersonalConfigService } from './personal-config.service';
import { PersonalService } from './services/personal.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-personal-config',
  templateUrl: './personal-config.component.html',
  styleUrls: ['./personal-config.component.scss']
})
export class PersonalConfigComponent implements OnInit {

  protected userTypes: Array<any> = [];
  protected newUserRegistered: boolean = false;
  protected updateUser: boolean = false;
  protected modalName: string = 'personal-config__modal';
  protected selectedMenuItem: string = 'mi-perfil';

  constructor(private _authService: AuthService, public _personServices: PersonalService, private modalService: ModalService, private router: Router, protected personalConfigService: PersonalConfigService,private usersService: UsersService) {
    
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
    this._personServices.isEditingProfile = true;
  }
  
  handleSaveChanges(){
    if( this._personServices.profileForm.invalid){
      this._personServices.formInvalid = true;
      return;
    }
    else 
      this._personServices.isEditingProfile =  false;
  }
 
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
    if(this._personServices.dataUserEdit.contact === 'No')
      this._personServices.dataUserEdit.contact = 'Si'
    else
      this._personServices.dataUserEdit.contact = 'No';
  
  }

  async updateUsers(dataUser) {
    await this.usersService.updateUsers(dataUser)
      .subscribe(res => {
        if(res.getDetalle().code === "OK.000")
          this.personalConfigService.handleNewUserConf();
        console.log(dataUser);
      }), err => {
        return err;
      };
  }

}
