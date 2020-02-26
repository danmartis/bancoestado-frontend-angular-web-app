import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConveniosService } from '../../../shared/services/convenios.service';
import { CuentasService } from '../../../shared/services/cuentas.service';
import { BusquedaAvanzada } from '../../../domain/busquedaAvanzada.class';
import { BusquedasService } from '../../../shared/services/busquedas.service';
import { PaymentAccount } from 'src/app/shared/utils/types';
import { Convenio } from 'src/app/domain/convenio.class';

@Component({
  template: '<div></div>',
  providers: [NgbModalConfig, NgbModal]
})

export class HomeFacade implements OnInit {
  
  public ValidaNroCta: boolean = false;
  public convenios: any[] = [];
  public conveniosFiltrados: any[];
  public datosBusqueda: any[];
  public rubros = [];

  constructor(config: NgbModalConfig,
    private convenioService: ConveniosService,
    private busquedasService: BusquedasService,
    private cuentasService: CuentasService) {

    config.backdrop = 'static';
    config.keyboard = false
  }

  ngOnInit() {
  }

  buscaConvenio() {
    console.log('buscaConvenio');
    this.convenioService.convenio().subscribe(resConvenio => {
      this.convenios = [];
      this.convenios = resConvenio.getDetalle().convenios;
      this.getRubros();
      console.log('Convenios:', this.convenios);
    });
  }

  filtrar(letras: string): Convenio[] {
    this.search(letras);
    return this.conveniosFiltrados;
  }

  matches(convenio: Convenio, letras: string): boolean {
    return String(convenio.servicio).toLocaleLowerCase().includes(letras.toLocaleLowerCase())
      || String(convenio.rubro.nombreRubro).toLocaleLowerCase().includes(letras.toLocaleLowerCase())
  }

  compare(v1, v2): number {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }
  
  sort(convenios: any[], column?) {
    return [...convenios].sort((a, b) => {
      if (column) {
        return this.compare(a[column], b[column]);
      } else {
        return this.compare(a, b);
      }
    });
  }

  getConveniosByRubro(rubro: string, match: boolean) {
    return this.convenios.filter((convenio) => {
      return !!match ? convenio.rubro.nombreRubro.toLocaleLowerCase() == rubro : convenio.rubro.nombreRubro.toLocaleLowerCase() !== rubro;
    });
  }

  getRubros() {
    for (let convenio of this.convenios) {
      if (this.rubros.indexOf(convenio.rubro.nombreRubro.toLocaleLowerCase()) === -1) {
        this.rubros.push(convenio.rubro.nombreRubro.toLocaleLowerCase());
      }
    }
    console.log('getRubros:', this.rubros);
  }

  searchOthers(rubrosAsc: any[], letras: string) {
    let conveniosFiltrados = [];
    for (let i = 0; i < rubrosAsc.length; i++) {
      const rubro = rubrosAsc[i];
      let convenios = this.sort(this.getConveniosByRubro(rubro, true));
      convenios = convenios.filter((convenio) => this.matches(convenio, letras));
      if (convenios !== undefined && convenios.length > 0) {
        const rubroObj = { tittle: rubro, list: convenios };
        conveniosFiltrados = conveniosFiltrados.concat(rubroObj);
        console.log(conveniosFiltrados);
      }
    }
    this.conveniosFiltrados = conveniosFiltrados;
    console.log('concat:', this.conveniosFiltrados);
  }

  searchItem(rubrosAsc: any[], letras: string, res: number) {
    let conveniosFiltrados = [];
    const rubroObj = { tittle: letras, list: this.sort(this.getConveniosByRubro(letras, true)) };
    conveniosFiltrados = conveniosFiltrados.concat(rubroObj);
    for (let i = 0; i < rubrosAsc.length; i++) {
      if (i !== res) {
        const rubro = rubrosAsc[i];
        let others = this.sort(this.getConveniosByRubro(rubro, true));
        others = others.filter((convenio) => this.matches(convenio, letras));
        if (others !== undefined && others.length > 0) {
          const rubroObj = { tittle: rubro, list: others };
          conveniosFiltrados = conveniosFiltrados.concat(rubroObj);
          console.log(conveniosFiltrados);
        }
      }
    }
    this.conveniosFiltrados = conveniosFiltrados;
    console.log('concat:', this.conveniosFiltrados);
  }

  search(letras: string) {
    if (letras !== undefined && letras.length >= 3) {
      letras = letras.toLocaleLowerCase();
      let rubrosAsc = this.sort(this.rubros);
      const res = rubrosAsc.indexOf(letras);
      if (res < 0) {
        this.searchOthers(rubrosAsc, letras);
      } else {
        this.searchItem(rubrosAsc, letras, res);
      }
    } else { 
      this.conveniosFiltrados = [];
    }
  }

  async agregarCuenta(idConvenio: number, numeroCliente: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.cuentasService.cuenta(idConvenio, numeroCliente.replace('-', '')).subscribe((cuenta) => {
        console.log('LOG: cuenta', cuenta);
        if (cuenta.getDetalle().montoPorDefecto) {
          resolve(cuenta.getDetalle());
        } else {
          this.ValidaNroCta = true;
          reject();
        }
      });
    });
  }

  async buscarAyudaConvenio(idConvenio: number): Promise<any> {
    console.log('idConvenio:', idConvenio);
    return new Promise<any>((resolve, reject) => {
      this.convenioService.getConvenio(idConvenio).subscribe((convenio) => {
        if (convenio.getDetalle().ayuda) {
          console.log('Ayuda:', convenio.getDetalle().ayuda);
          resolve(convenio.getDetalle().ayuda);
        } else {
          console.log('error');
          reject('error');
        }
      });
    });
  }

  public caracteresEspeciales(tecla: KeyboardEvent): boolean {
    const keyval = (tecla.keyCode === 0) ? tecla.charCode : tecla.keyCode;
    return (keyval >= 97 && keyval <= 122) || (keyval >= 65 && keyval <= 90) || (keyval >= 48 && keyval <= 57) || keyval == 45 || keyval == 32;
  }

  async busquedaAvanzadaIdentificador(idConvenio: number): Promise<any> {
    console.log('busquedaavanzadaid:', idConvenio);
    return new Promise<any>((resolve, reject) => {
      this.convenioService.getConvenio(idConvenio).subscribe((convenio) => {
        const busquedaAvanzada = convenio.getDetalle().ayuda.busqueda;
        console.log('busquedaavanzada:', busquedaAvanzada);
        this.datosBusqueda = [];
        for (let i = 0; i < busquedaAvanzada.length; i++) {
          const bAvanzada: BusquedaAvanzada = new BusquedaAvanzada();
          bAvanzada.nombre = busquedaAvanzada[i].nombre;
          bAvanzada.tipo = busquedaAvanzada[i].tipo;
          bAvanzada.placeholder = busquedaAvanzada[i].placeholder;
          bAvanzada.pattern = busquedaAvanzada[i].pattern;
          bAvanzada.valor = '';
          this.datosBusqueda.push(bAvanzada);
        }
        console.log('datosBusqueda', this.datosBusqueda);
        resolve(this.datosBusqueda);
        
      }, error => {
        console.log('error');
        reject(error);
      });
    });
  }

  async buscarNumeroCliente(idConvenio: number, datosBusqueda): Promise<any> {
    console.log('idConvenio:', idConvenio);
    console.log('datosBusqueda:', datosBusqueda);
    this.datosBusqueda = datosBusqueda;
    console.log('datosBusqueda', this.datosBusqueda);
    let busqueda: any = [];
    for (let dato of this.datosBusqueda) {
      const data = {
        id: dato.nombre,
        valor: dato.valor
      };
      busqueda.push(data);
      console.log('data enviada busquda:', busqueda);
    }
    console.log('busqueda', busqueda);
    return new Promise<any>((resolve, reject) => {
      this.busquedasService.busqueda(idConvenio, busqueda).subscribe((busqueda) => {
        if (busqueda.getDetalle()) {
          resolve(busqueda.getDetalle().numeroCliente);
        } else {
          reject();
        }
      });
    });
  }

  existAccountInSlice(accountList : Array<PaymentAccount>, accountNew: PaymentAccount) {
    const id = accountNew.clientNumber + accountNew.title;
    for(let account of accountList) {
      const idAccount = account.clientNumber + account.title;
      if (id === idAccount) {
        return true;
      }
    }
    return false;
  }

}
