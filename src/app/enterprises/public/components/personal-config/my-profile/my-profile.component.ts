import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../login/services/model/login.model';
import { AuthService } from '../../../../../services/authentication/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  @Input() isEditingProfile: boolean;
  protected personalInfoItems: Object;
  protected billerInfoItems: Array<any>;
  protected contractInfoItems: Array<any>;
  protected _user: User;

  messageError: string = "";

  constructor(private _authService: AuthService) { }

  async getCurrentUser() {
    await this._authService.getCurrentUser(this._authService.currentUserValue.email, this._authService.currentUserValue.rut)
      .subscribe((res: any) => {
        this._user = res.data.data;
        console.log(this._user);
      });
      return this._user;
  }

  ngOnInit() {
    this.getCurrentUser();
    console.log(this.getCurrentUser());
    this.personalInfoItems = {
      'fixed': [
        {
          id: '1',
          label: 'Rut',
          value: '15.446.676-k'
        },
        {
          id: 'email',
          label: 'Correo electrónico',
          value: 'maria.martinez@email.com'
        },
      ],
      'editable': [
        {
          id: 'birthday',
          label: 'F. nacimiento',
          value: '10/12/1986'
        },
        {
          id: 'phone',
          label: 'Teléfono',
          value: '+56978811992'
        },
        {
          id: 'address',
          label: 'Dirección',
          value: 'Los Cerezos 89, Dpto 782'
        },
        {
          id: 'zone',
          label: 'Comuna',
          value: 'Ñuñoa'
        },
        {
          id: 'city',
          label: 'Ciudad',
          value: 'Santiago, RM'
        }
      ]
    };

    this.billerInfoItems = [
      {
        label: 'Empresa',
        value: 'Inmobiliaria Aconcagua, S.A.'
      },
      {
        label: 'Perfil asignado ( Rol )',
        value: 'Administrador'
      },
      {
        label: 'Contacto para ServiEstado',
        value: 'Si'
      },
      {
        label: 'Tipo de contacto',
        value: 'Contacto operacional'
      }
    ];
    this.contractInfoItems = [
      {
        icon: 'description',
        title: 'Deptos. Coquimbo ...',
        label: 'Fecha activación',
        value: '10/07/2019'
      },
      {
        icon: 'description',
        title: 'Deptos. Zona Sur',
        label: 'Fecha activación',
        value: '12/07/2019'
      },
    ];
  }
}
