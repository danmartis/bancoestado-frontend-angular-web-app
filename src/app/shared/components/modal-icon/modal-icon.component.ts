import { Component, OnInit, Input } from '@angular/core';

// ok, info, danger
const clazz = {
  ok: '',
  info: 'icon-modal--info',
  danger: 'icon-modal--danger',
  il: 'icon-modal--il',
  img: 'icon-modal--img',
  imgLg: 'icon-modal--img-lg',
  imgSm: 'icon-modal--img-sm',
  voucher: 'icon-modal--voucher',
};

const src = {
  ok: 'assets/imgs/svg/icon-ok.svg',
  info: 'assets/imgs/svg/icon-info.svg',
  danger: 'assets/imgs/svg/icon-danger.svg',
  voucher: 'assets/imgs/svg/icon-ok.svg',
};

const alt = {
  ok: 'Icono ok de la modal',
  info: 'Icono info de la modal',
  danger: 'Icono danger de la modal',
};

@Component({
  selector: 'app-modal-icon',
  templateUrl: './modal-icon.component.html',
  styleUrls: ['./modal-icon.component.scss']
})
export class ModalIconComponent implements OnInit {

  @Input() src : string = '';
  @Input() type : string = '';
  @Input() alt : string = '';
  @Input() class : string = '';

  constructor() { }

  ngOnInit() {
  }

  getSrc() {
    return src[this.type] || this.src;
  }

  getAlt() {
    return alt[this.type] || this.alt;
  }

  getClass() {
    return clazz[this.type] || this.class;
  }

}
