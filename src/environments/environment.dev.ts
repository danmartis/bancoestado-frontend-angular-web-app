import { general } from './general';

const specific = {
  production: false,
  ambiente: 'dev',
  BFF_pago20: 'undefined',
  DOMAIN_DIGITAL: 'undefined',
<<<<<<< HEAD
 DOMAIN_LOCAL: 'http://localhost:8080/bff/se-bff-empresas/v1/',
  //DOMAIN_LOCAL: 'http://a69a56848693011eab3eb0e1f5b95262-922333886.us-east-1.elb.amazonaws.com/bff/se-bff-empresas/v1/',
=======
   DOMAIN_LOCAL: 'http://localhost:8080/bff/se-bff-empresas/v1/',
 // DOMAIN_LOCAL: 'http://a69a56848693011eab3eb0e1f5b95262-922333886.us-east-1.elb.amazonaws.com/bff/se-bff-empresas/v1/',
>>>>>>> 80355259e98e0c2bdf0b6709c0853857db309179
  CONFIG_TOKEN_INACTIVITY: 180000,
  CONFIG_TOKEN_REFRESH_TOKEN: 180000,
};


export const environment = {...general, ...specific };