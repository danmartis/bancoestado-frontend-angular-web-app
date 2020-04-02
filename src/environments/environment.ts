import { general } from './general';

const specific = {
  production: false,
  ambiente: '',
  BFF_pago20: '',
  DOMAIN_DIGITAL: 'https://desa-plataformadigital.banco.bestado.cl',
  DOMAIN_LOCAL: 'http://a69a56848693011eab3eb0e1f5b95262-922333886.us-east-1.elb.amazonaws.com/bff/se-bff-empresas/v1/',
  CONFIG_TOKEN_INACTIVITY: 180000,
  CONFIG_TOKEN_REFRESH_TOKEN: 180000,
};

export const environment = { ...general, ...specific };