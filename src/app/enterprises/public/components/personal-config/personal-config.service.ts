import { Injectable } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Injectable({
  providedIn: 'root',
})
export class PersonalConfigService {

  constructor(private modalService: ModalService) { }

  

  protected modalType: '' | 'new-user' | 'new-user-confirm' | 'edit-user' | 'edit-user-confirm' | 'delete-user' | 'delete-user-confirm' = '';

  handleNewUser(modalName: string) {
    this.modalType = 'new-user';
    this.modalService.toggle(modalName);
  }

  handleNewUserConf() {
    this.modalType = 'new-user-confirm';
  }

  handleEditUser(modalName: string) {
    this.modalType = 'edit-user';
    this.modalService.toggle(modalName);
  }

  handleEditUserConf(modalName: string) {
    this.modalType = 'edit-user-confirm';
  }

  handleDeleteUser(modalName: string) {
    // this.modalType = 'delete-user';
    // this.modalService.toggle(modalName);
  }

  handleDeleteUserConf(modalName: string) {
    this.modalType = 'delete-user-confirm';
  }

  closeModal(modalName: string) {
    this.modalService.close(modalName);
    console.log()
  }
}