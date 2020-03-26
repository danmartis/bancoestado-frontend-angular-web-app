import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  @Input() isEditingProfile: boolean;
  @Input() _user: any;
  protected personalInfoItems: Object;
  protected billerInfoItems: Array<any>;
  protected contractInfoItems: Array<any>;

  messageError: string = "";

  constructor() { }

  ngOnInit() {
    this.personalInfoItems = {
      'fixed': [
        {
          id: 'rut',
          label: 'Rut',
          value: this._user.rut
        },
        {
          id: 'email',
          label: 'Correo electrónico',
          value: this._user.email
        },
      ],
      'editable': [
        {
          id: 'birthday',
          label: 'F. nacimiento',
          value: this._user.birthday
        },
        {
          id: 'phone',
          label: 'Teléfono',
          value: this._user.phone
        },
        {
          id: 'address',
          label: 'Dirección',
          value: this._user.address
        },
        {
          id: 'zone',
          label: 'Comuna',
          value: this._user.commune
        },
        {
          id: 'city',
          label: 'Ciudad',
          value: this._user.city
        }
      ]
    };

    this.billerInfoItems = [
      {
        label: 'Empresa',
        value: this._user.company[0].name
      },
      {
        label: 'Perfil asignado ( Rol )',
        value: this._user.roles[0].role
      },
      {
        label: 'Contacto para ServiEstado',
        value: this._user.contact
      },
      {
        label: 'Tipo de contacto',
        value: this._user.contactType
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