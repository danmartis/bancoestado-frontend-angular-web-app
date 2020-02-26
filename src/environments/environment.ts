import { general } from './general';

const specific = {
  production: false,
  ambiente: 'dev',
  DOMAIN_DIGITAL: 'https://desa-plataformadigital.banco.bestado.cl',
  CONFIG_TOKEN_INACTIVITY: 180000,
  CONFIG_TOKEN_REFRESH_TOKEN: 180000,
};

export const environment = { ...general, ...specific };