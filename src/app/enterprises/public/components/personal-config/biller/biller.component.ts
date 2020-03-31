import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-biller',
  templateUrl: './biller.component.html',
  styleUrls: ['./biller.component.scss']
})
export class BillerComponent implements OnInit {

  protected info: Array<{
    label: string,
    value: string,
  }>;

  protected profile: {
    img: string,
    status: string,
    name: string,
    rut: string,
  };

  protected ceo: Array<{
    icon: string,
    name: string,
    rut: string
  }>;

  protected documents: Array<{
    icon: string,
    name: string,
    label: string,
    value: string
  }>;

  constructor() {

    this.info = [
      {
        label: 'Razón social',
        value: 'Inmobiliaria Aconcagua',
      },
      {
        label: 'Giro',
        value: 'Construcción',
      },
      {
        label: 'Dirección',
        value: 'Los Cerezos 89, Dpto 782',
      },
      {
        label: 'Comuna',
        value: 'Ñuñoa',
      },
      {
        label: 'Ciudad',
        value: 'Santiago',
      }
    ];

    this.profile = {
      img: '',
      status: 'Activo',
      name: 'Inmobiliaria Aconcagua',
      rut: '76.778.559-k',
  
    };

    this.ceo = [
      {
      icon: 'perm_identity',
      name: 'Fabiola Perez',
      rut: '17.232.232-3'
      },
      {
        icon: 'perm_identity',
        name: 'Roberto Perez',
        rut: '18.256.558-3'
      }
    ];

    this.documents = [
      {
        icon: 'receipt',
        name: 'Escritura pública',
        label: 'Última edición',
        value: '24/01/2019'
      },
      {
        icon: 'receipt',
        name: 'Contrato',
        label: 'Última edición',
        value: '02/02/2019'
      },
      {
        icon: 'receipt',
        name: 'Anexo servicios',
        label: 'Última edición',
        value: '29/03/2020'
      }
    ];

    
  }

  ngOnInit() {

  }

}
