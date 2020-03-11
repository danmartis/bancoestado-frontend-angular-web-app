import { general } from './general';

const specific = {
  production: false,
  ambiente: 'dev',
  BFF_pago20: 'undefined',
  DOMAIN_DIGITAL: 'undefined',
  DOMAIN_LOCAL: 'http://localhost:3000/bff/se-bff-empresas/v1/',
  CONFIG_TOKEN_INACTIVITY: 180000,
  CONFIG_TOKEN_REFRESH_TOKEN: 180000,
};


export const environment = {...general, ...specific };