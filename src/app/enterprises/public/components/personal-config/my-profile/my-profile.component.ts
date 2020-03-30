import { Component, OnInit, Input } from '@angular/core';
import { FilesService } from '../../../../../services/files/files.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  @Input() 
  isEditingProfile: boolean;
  @Input() 
  _user: any;
  protected personalInfoItems: Object;
  protected billerInfoItems: Array<any>;
  protected contractInfoItems: Array<any>;
  protected admin: string;

  messageError: string = "";

  constructor(private _fileService: FilesService) { }

  isAdmin() {
    for(let roles of this._user.roles) {
      const admin = "Administrador"
      if(roles.role.match(admin)) {
        return true;
      } else {
        return false;
      }
    }
  }

  async downloadFile(fileName: string) {
    await this._fileService.convenantsDownload(fileName);
    console.log(this._user.roles[0].role)
    console.log(this._user["roles"].role)
  }

  ngOnInit() {
    this.isAdmin();
    console.log(this.isAdmin());
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
        title: this._user.covenants[0].nameFile,
        label: 'Fecha activación',
        value: this._user.covenants[0].activationDate
      },
      {
        icon: 'description',
        title: this._user.covenants[1].nameFile,
        label: 'Fecha activación',
        value: this._user.covenants[1].activationDate
      },
    ];

    console.log(this.contractInfoItems)
    
  }

}
