import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from '../../../../../services/authentication/auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  protected userItems: Array<any> = [];
  protected userTypes: any = [];
  
  constructor(private usersService: UsersService, private _authService: AuthService) {
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
   /* this.userItems = [
      {
        img: '',
        firstname: 'Nombre 1',
        lastname: 'Apellido 1',
        email: 'username1@email.com',
        userProfile: 'Administrador',
        contact: 'Si'
      },
      {
        img: '',
        firstname: 'Nombre 2',
        lastname: 'Apellido 2',
        email: 'username2@email.com',
        userProfile: 'Administrador',
        contact: 'no'
      },
      {
        img: 'assets/imgs/login-se-code-success.png',
        firstname: 'Nombre 3',
        lastname: 'Apellido 3',
        email: 'username3@email.com',
        userProfile: 'Operador',
        contact: 'no'
      },
      {
        img: 'assets/imgs/usuario.png',
        firstname: 'Nombre 4',
        lastname: 'Apellido 4',
        email: 'username1@email.com',
        userProfile: 'Autorizador',
        contact: 'Si'
      },
    ];*/
  }

  ngOnInit() {
  } 

  async getUsers() {
    await this.usersService.getUsers(this._authService.currentUserValue.rut.replace('.', ''))
      .subscribe(res => {
        console.log(res.getDetalle().data)
        this.userItems = res.getDetalle().data;
      }), err => {
        return err;
      };
  }
 

}
