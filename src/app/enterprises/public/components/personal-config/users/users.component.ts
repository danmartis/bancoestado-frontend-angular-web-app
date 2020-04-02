import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from '../../../../../services/authentication/auth.service';
import { ModalService } from '../../../../../services/modal.service';
import { PersonalConfigService } from '../personal-config.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  protected userItems: Array<any> = [];
  protected userTypes: any = [];
  protected modalName: string = 'personal-config__modal';
  protected updateUser: boolean = false;
  protected roleUser: string = '';
 
  @Output() editUserEv = new EventEmitter;
  // @Output() deleteUserEv = new EventEmitter;
  
  constructor(private usersService: UsersService, private _authService: AuthService,protected modalService: ModalService, protected personalConfigService: PersonalConfigService) {
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
   
   this.getUsers();
  }

  ngOnInit() {
  }

  openUpdateUserModal() {
    this.toggleModal();
    this.updateUser = true;
  }

  handleUpdateUser(editUser) {
    console.log('handleUpdateUser()')
    console.log(editUser);
    this.toggleModal();
  }

  handleDeleteUser(deleteUser) {
    console.log(deleteUser);
    this.toggleModal();
  }

  // MODAL
  toggleModal() {
    this.modalService.toggle(this.modalName);
  }

  closeModal() {
    this.modalService.toggle(this.modalName);
  }

  async getUsers() {
    console.log("datos users" + this._authService.currentUserValue.roles[0].role)
    await this.usersService.getUsers(this._authService.currentUserValue.rut.replace('.', ''))
      .subscribe(res => {
        console.log(res.getDetalle().data)
        this.userItems = res.getDetalle().data;
      }), err => {
        return err;
      };
  }
}
