import { Component, OnInit, Input } from '@angular/core';
import { FilesService } from '../../../../../services/files/files.service';
import { User } from '../../login/services/model/login.model';
import { AuthService } from '../../../../../services/authentication/auth.service';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {


  // @Input() _user: any;
  protected _user: User;
  protected personalInfoItems: any;
  protected billerInfoItems: Array<any>;
  protected contractInfoItems: Array<any>;
  protected admin: string;
  protected userData: Object;




  messageError: string = "";

  constructor(private _authService: AuthService, private _fileService: FilesService, public _personalServices: PersonalService) { }

  async getCurrentUser() {
    await this._authService.getCurrentUser(this._authService.currentUserValue.email, this._authService.currentUserValue.rut)
      .subscribe(_user => {
        this._user = _user;
        console.log(this._user)
        this.isAdmin(),
          this._personalServices.formPofile(this._user)
      }), err => {
        return err;
      };
    return this._user;
  }

  isAdmin() {
    if (this._user) {
      for (let roles of this._user.roles) {
        const admin = "Administrador";
        if (roles.role.match(admin)) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  phoneCharacters(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 43 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  formatearRut(rut: string) {
    var rutLimpio = rut.replace(/-/g, "");
    if (rutLimpio != "" && rutLimpio.length > 1) {
      let inicio = rutLimpio.substring(0, rutLimpio.length - 1);
      let rutFormateado = "";
      let i = 0;
      let j = 1;
      for (i = inicio.length - 1; i >= 0; i--) {
        let letra = inicio.charAt(i);
        rutFormateado = letra + rutFormateado;
        if (j % 3 == 0 && j <= inicio.length - 1) {
          rutFormateado = "." + rutFormateado;
          console.log(rutFormateado)
        }
        j++;
      }
      let dv = rutLimpio.substring(rutLimpio.length - 1);
      console.log(dv);
      rutFormateado = rutFormateado + "-" + dv;
      console.log(rutFormateado)
      return rutFormateado;
    }
  };

  async downloadFile(fileName: string) {
    await this._fileService.convenantsDownload(fileName);
  }
  ngOnInit() {
    this.getCurrentUser()



    //this.isAdmin();
    //console.log(this.isAdmin());
    this.personalInfoItems = {
      'fixed': [
        {
          id: 'rut',
          label: 'Rut',
          value: ''
        },
        {
          id: 'email',
          label: 'Correo electrónico',
          value: ''
        },
      ],
      'editable': [
        {
          id: 'birthday',
          label: 'F. nacimiento',
          value: ''
        },
        {
          id: 'phone',
          label: 'Teléfono',
          value: ''
        },
        {
          id: 'address',
          label: 'Dirección',
          value: ''
        },
        {
          id: 'zone',
          label: 'Comuna',
          value: ''
        },
        {
          id: 'city',
          label: 'Ciudad',
          value: ''

        }
      ]
    };

    this.billerInfoItems = [
      {
        label: 'Empresa',
        value: ''
      },
      {
        label: 'Perfil asignado ( Rol )',
        value: ''
      },
      {
        label: 'Contacto para ServiEstado',
        value: ''
      },
      {
        label: 'Tipo de contacto',
        value: ''
      }
    ];

    this.contractInfoItems = [
      {
        icon: 'description',
        title: '',
        label: 'Fecha activación',
        value: ''
      },
      {
        icon: 'description',
        title: '',
        label: 'Fecha activación',
        value: ''
      },
    ];

    this.userData = {
      firstname: 'Jane',
      lastname: 'Doe',
      img: '',
      email: 'this._user.email'
    };
    console.log(this.contractInfoItems)

  }

  getMesaggeErrorBirthday() {

    return this._personalServices.f.birthday.getError('required') ? 'Este campo es requerido' : '';
  }

  getMesaggeErrorPhone() {

    return this._personalServices.f.phone.getError('required') ? 'Este campo es requerido'
      : this._personalServices.f.phone.getError('minlength') ? 'El campo debe contener 12 caracteres'
      : this._personalServices.f.phone.getError('badFormat')? 'El número debe comenzar con +56 seguido del número'
      : this._personalServices.f.phone.getError('badNumber')? 'Número invalido'
      : '';
  }

  getMesaggeErrorAddress() {

    return this._personalServices.f.address.getError('required') ? 'Este campo es requerido' : '';
  }

  getMesaggeErrorZone() {

    return this._personalServices.f.zone.getError('required') ? 'Este campo es requerido' : '';
  }

  getMesaggeErrorCity() {

    return this._personalServices.f.city.getError('required') ? 'Este campo es requerido' : '';
  }




  ngDoCheck() {




    if (this._user) {


      //this._personalServices.formPofile(this._user)
      this.personalInfoItems = {
        'fixed': [
          {
            id: 'rut',
            label: 'Rut',
            value: this.formatearRut(this._user.rut)
            // value: this._user.userRut
          },
          {
            id: 'email',
            label: 'Correo electrónico',
            // value: 'prueba2@email.com'
            value: this._user.email
          },
        ],
        'editable': [
          {
            id: 'birthday',
            label: 'F. nacimiento',
            // value: '23/03/1955'
            value: this._user.birthday
          },
          {
            id: 'phone',
            label: 'Teléfono',
            // value: '+56999999999'
            value: this._user.phone
          },
          {
            id: 'address',
            label: 'Dirección',
            // value: 'La casita 59'
            value: this._user.address
          },
          {
            id: 'zone',
            label: 'Comuna',
            // value: 'Ñuñoa'
            value: this._user.commune
          },
          {
            id: 'city',
            label: 'Ciudad',
            // value: 'Santiago'
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
          // value: 'Si'
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
    }
  }
}
