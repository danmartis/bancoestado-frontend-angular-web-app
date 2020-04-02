import { general } from './general';

const specific = {
  production: true,
  ambiente: 'prod',
  BFF_pago20: '',
  DOMAIN_DIGITAL: '',
  DOMAIN_LOCAL: '',
  CONFIG_TOKEN_INACTIVITY: 180000,
  CONFIG_TOKEN_REFRESH_TOKEN: 180000,
};

export const environment = {...general, ...specific };