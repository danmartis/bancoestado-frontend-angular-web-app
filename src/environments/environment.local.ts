import { general } from './general';

const specific = {
  production: false,
  ambiente: 'local',
  //HOME_APP20:'https://desa-plataformadigital.banco.bestado.cl/apps/home/home?rut=',
  BFF_se_personas: 'https://desa-plataformadigital.banco.bestado.cl/servicios/se-portal-empresas-bff/bff',
  DOMAIN_DIGITAL: 'https://desa-plataformadigital.banco.bestado.cl',
  CONFIG_TOKEN_INACTIVITY: 180000,
  CONFIG_TOKEN_REFRESH_TOKEN: 180000,
};

export const environment = {...general, ...specific };