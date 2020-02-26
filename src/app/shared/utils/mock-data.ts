import {
  Group,
  PaymentAccount,
  PaymentMethod,
  Voucher,
  HistoryPayment,
  HistoryPaymentAdvanced,
  PaymentBank
} from './types';
import {
  OptionsGroup,
  OptionsAccountEnum,
  PaymentMethodType,
  PaymentAccountAndGroupStatus,
  PaymentMethodTypeDescription,
} from './options';

const getRandomElementFromArray = (array: Array <any> ) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const groups: Array <Group> = [{
  title: 'Veterinaria',
  detail: '4 cuentas',
  value: 123123,
  icon: OptionsGroup.Pet,
  textStatus: '1 cuenta vencida',
  status: PaymentAccountAndGroupStatus.Warning,
}, {
  title: 'Movistar',
  detail: '1 cuenta',
  value: 123123,
  icon: OptionsGroup.Phone,
  textStatus: '3 cuentas sin deuda',
  status: PaymentAccountAndGroupStatus.Success,
}, {
  title: 'Vacaciones',
  detail: '6 cuentas',
  value: 123123,
  icon: OptionsGroup.Vacation,
  textStatus: '',
  status: PaymentAccountAndGroupStatus.Void,
}, {
  title: 'Fin de semana',
  detail: '2 cuentas',
  value: 123123,
  icon: OptionsGroup.Fun,
  textStatus: 'Error en 1 cuenta',
  status: PaymentAccountAndGroupStatus.Error,
}];



export const accounts: Array <PaymentAccount> = [{
  clientNumber: "ADG 234 3U",
  title: "Chilectra",
  value: 120214,
  uniqueId: 12,
  expire: new Date('02/02/2020'),
  selected: true,
  textStatus: 'Deuda Vencida',
  status: PaymentAccountAndGroupStatus.Warning,
  type: OptionsAccountEnum.Electrical,
  fees: false,
  expirePayment: 1000,
}, {
  clientNumber: "122 3123123 12",
  title: "Entel",
  value: 10123,
  uniqueId: 17,
  expire: new Date('02/02/2022'),
  selected: false,
  textStatus: '',
  status: PaymentAccountAndGroupStatus.Void,
  type: OptionsAccountEnum.Teleco,
  fees: false,
  expirePayment: 12000,
}, {
  clientNumber: "123 43549 57",
  title: "Autopista",
  value: 0,
  uniqueId: 13,
  expire: new Date('02/02/2021'),
  selected: false,
  textStatus: 'No tienes deudas pendientes',
  status: PaymentAccountAndGroupStatus.Success,
  type: OptionsAccountEnum.Other,
  fees: false,
}, {
  clientNumber: "123 43549 57",
  title: "Falabella",
  value: 0,
  uniqueId: 14,
  expire: new Date('02/02/2021'),
  selected: false,
  textStatus: 'No tienes deudas pendientes',
  status: PaymentAccountAndGroupStatus.Success,
  type: OptionsAccountEnum.Other,
  fees: false,
}, {
  clientNumber: "12312334756",
  title: "Claro",
  value: 550000,
  uniqueId: 15,
  expire: new Date('02/02/2021'),
  selected: false,
  textStatus: '',
  status: PaymentAccountAndGroupStatus.Void,
  type: OptionsAccountEnum.Teleco,
  fees: [{
      value: 100000,
      title: 'cuota 1',
  }, {
      value: 100000,
      title: 'cuota 2',
  }, {
      value: 100000,
      title: 'cuota 3',
  }, {
      value: 100000,
      title: 'cuota 4',
  }, {
      value: 100000,
      title: 'cuota 5',
  }, {
      value: 50000,
      title: 'cuota 6',
  }],
}, {
  clientNumber: "123 12123 123",
  title: "Falabella",
  value: 34440,
  uniqueId: 16,
  expire: new Date('02/02/2021'),
  selected: false,
  textStatus: '',
  status: PaymentAccountAndGroupStatus.Void,
  extraValue: [123132, 342343],
  type: OptionsAccountEnum.Other,
  fees: false,
  expirePayment: 12000,
}, {
  clientNumber: "122 3123123 12",
  title: "Grupo Playa",
  value: 1000,
  uniqueId: 17,
  expire: new Date('02/02/2022'),
  selected: false,
  textStatus: 'Error en la cuenta',
  status: PaymentAccountAndGroupStatus.Error,
  type: OptionsAccountEnum.Group,
  fees: false,
  group: 'vacation',
  groupList: [{
      clientNumber: "123 12123 123",
      title: "Falabella",
      value: 34440,
      uniqueId: 16,
      expire: new Date('02/02/2021'),
      selected: false,
      textStatus: '',
      status: '',
      extraValue: [123132, 342343],
      type: OptionsAccountEnum.Other,
      fees: false,
      expirePayment: 12000,
  }, {
      clientNumber: "123 12123 123",
      title: "Claro",
      value: 34440,
      uniqueId: 16,
      expire: new Date('02/02/2021'),
      selected: false,
      textStatus: '',
      status: '',
      extraValue: [123132, 342343],
      type: OptionsAccountEnum.Teleco,
      fees: false,
      expirePayment: 12000,
  }],
  expirePayment: 12000,
}];

export const registeredPaymentMethods: Array <PaymentMethod> = [{
      number: '**** **** **** 5463',
      type: PaymentMethodType.Mastercard,
      primary: true,
      bank: 'Banco Estado'
  },
  {
      number: '**** **** **** 5463',
      type: PaymentMethodType.Visa,
      primary: false,
      bank: 'Banco Estado'
  },
  {
      number: '**** **** **** 5463',
      type: PaymentMethodType.Mastercard,
      primary: false,
      bank: 'Banco de Chile'
  }
];

export const generateMockAccount = (account: PaymentAccount, counter: number) => {
  const randomAccount: PaymentAccount = getRandomElementFromArray(accounts);
  return ({
      ...account,
      ...randomAccount,
      counter: counter,
  });
};

export const voucherSingle: Voucher = {
  isSingle: true,
  value: 36600,
  detailSingleImage: 'assets/imgs/entel.png',
  from: 'Cuenta RUT N° 16751256',
  accounts: [accounts[0]],
  detail: [{
          name: 'Nº de cliente',
          value: '998989797',
      },
      {
        name: 'servicio',
        value: 'Entel Hogar',
      },
      {
          name: 'Nombre / Alias',
          value: 'Mi teléfono',
      },
      {
          name: 'N° Transacción',
          value: '53434563',
      },
      {
          name: 'N° Documento',
          value: '4532452345',
      },
      {
          name: 'Fecha',
          value: '10/04/2019',
      },
      {
          name: 'Hora',
          value: '12:55',
      }
  ],
  message: 'El pago de tu cuenta se realizó con éxito',
};

export const voucherGroup: Voucher = {
  isSingle: false,
  value: 36600,
  from: 'Cuenta RUT N° 16751256',
  accounts: [accounts[0], accounts[1], accounts[2], accounts[3]],
  detail: [{
          name: 'N° Transacción',
          value: '53434563',
      },
      {
        name: 'servicio',
        value: 'Entel Hogar',
      },
      {
          name: 'N° Documento',
          value: '4532452345',
      },
      {
          name: 'Fecha',
          value: '10/04/2019',
      },
      {
          name: 'Hora',
          value: '12:55',
      }
  ],
  message: 'El pago de tus cuentas se realizó con éxito',
};


export const historyFirst: HistoryPayment = {
  totalAccount: 9,
  months: [{
          name: 'Enero 2019',
          accounts: [{
              clientNumber: '123123123',
              title: 'Falabella',
              value: 12345,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }, {
              clientNumber: '123123123',
              title: 'Falabella',
              value: 12345,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }, {
              clientNumber: '123123123',
              title: 'Falabella',
              value: 12345,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }],
      }, {
          name: 'Febrero 2019',
          accounts: [{
              clientNumber: '123123123',
              title: 'Falabella',
              value: 5342,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }],
      },
      {
          name: 'Marzo 2019',
          accounts: [{
              clientNumber: '123123123',
              title: 'Falabella',
              value: 43563,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }],
      }
  ]
}

export const historySecond: HistoryPayment = {
  totalAccount: 9,
  months: [{
          name: 'Enero 2019',
          accounts: [{
            clientNumber: '123123123',
            title: 'Grupo Playa',
            value: 123654,
            uniqueId: 1,
            payDate: new Date('02/02/2021'),
            type: OptionsAccountEnum.Group,
            info: PaymentAccountAndGroupStatus.Info,
            textInfo: 'Esta cuanta ya ha sido pagada en ServiEstado',
            group: 'vacation',
            groupList: [{
                    clientNumber: "123 12123 123",
                    title: "Falabella",
                    value: 34440,
                    uniqueId: 16,
                    expire: new Date('02/02/2021'),
                    selected: false,
                    textStatus: '',
                    status: '',
                    extraValue: [123132, 342343],
                    type: OptionsAccountEnum.Other,
                    fees: false,
                    expirePayment: 12000,
                }, {
                    clientNumber: "123 12123 123",
                    title: "Claro",
                    value: 34440,
                    uniqueId: 16,
                    expire: new Date('02/02/2021'),
                    selected: false,
                    textStatus: '',
                    status: '',
                    extraValue: [123132, 342343],
                    type: OptionsAccountEnum.Teleco,
                    fees: false,
                    expirePayment: 12000,
                }],
            },
              {
                  clientNumber: '123123123',
                  title: 'Falabella',
                  value: 756723,
                  uniqueId: 1,
                  payDate: new Date('02/02/2021'),
                  type: OptionsAccountEnum.Electrical,
                  info: PaymentAccountAndGroupStatus.Warning,
                  textInfo: 'Ha ocurrido un inconveniente',
              },
              {
                  clientNumber: '123123123',
                  title: 'Falabella',
                  value: 12345,
                  uniqueId: 1,
                  payDate: new Date('02/02/2021'),
                  type: OptionsAccountEnum.Other,
              },
              {
                  clientNumber: '123123123',
                  title: 'Falabella',
                  value: 12345,
                  uniqueId: 1,
                  payDate: new Date('02/02/2021'),
                  type: OptionsAccountEnum.Water,
              }
          ],
      }, {
          name: 'Febrero 2019',
          accounts: [{
              clientNumber: '123123123',
              title: 'Falabella',
              value: 5342,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Teleco,
          }],
      },
      {
          name: 'Marzo 2019',
          accounts: [{
              clientNumber: '123123123',
              title: 'Falabella',
              value: 43563,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }],
      }, {
          name: 'Abril 2019',
          accounts: [{
              clientNumber: '123123123',
              title: 'Falabella',
              value: 12345,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }],
      }, {
          name: 'Mayo 2019',
          accounts: [{
              clientNumber: '123123123',
              title: 'Falabella',
              value: 5342,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }],
      },
      {
          name: 'Junio 2019',
          accounts: [{
              clientNumber: '123123123',
              title: 'Falabella',
              value: 43563,
              uniqueId: 1,
              payDate: new Date('02/02/2021'),
              type: OptionsAccountEnum.Water,
          }],
      }
  ]
}

export const historyAdvanced : HistoryPaymentAdvanced = [{
    clientNumber: '123123123',
    title: 'Grupo Playa',
    value: 123654,
    uniqueId: 1,
    payDate: new Date('02/02/2021'),
    type: OptionsAccountEnum.Group,
    info: PaymentAccountAndGroupStatus.Info,
    textInfo: 'Esta cuanta ya ha sido pagada en ServiEstado',
    group: 'vacation',
    groupList: [{
            clientNumber: "123 12123 123",
            title: "Falabella",
            value: 34440,
            uniqueId: 16,
            expire: new Date('02/02/2021'),
            selected: false,
            textStatus: '',
            status: '',
            extraValue: [123132, 342343],
            type: OptionsAccountEnum.Other,
            fees: false,
            expirePayment: 12000,
        }, {
            clientNumber: "123 12123 123",
            title: "Claro",
            value: 34440,
            uniqueId: 16,
            expire: new Date('02/02/2021'),
            selected: false,
            textStatus: '',
            status: '',
            extraValue: [123132, 342343],
            type: OptionsAccountEnum.Teleco,
            fees: false,
            expirePayment: 12000,
        }],
    },{
    clientNumber: '123123123',
    title: 'Falabella',
    value: 756723,
    uniqueId: 1,
    payDate: new Date('02/02/2021'),
    type: OptionsAccountEnum.Electrical,
    info: PaymentAccountAndGroupStatus.Warning,
    textInfo: 'Ha ocurrido un inconveniente',
},
{
    clientNumber: '123123123',
    title: 'Falabella',
    value: 12345,
    uniqueId: 1,
    payDate: new Date('02/02/2021'),
    type: OptionsAccountEnum.Other,
},
{
    clientNumber: '123123123',
    title: 'Falabella',
    value: 12345,
    uniqueId: 1,
    payDate: new Date('02/02/2021'),
    type: OptionsAccountEnum.Water,
}];

export const unregisteredAccount : Array<PaymentAccount> = [{
    clientNumber: "123 12123 123",
    title: "Falabella",
    value: 34440,
    uniqueId: 16,
    expire: new Date('02/02/2021'),
    selected: false,
    textStatus: '',
    status: '',
    extraValue: [123132, 342343],
    type: OptionsAccountEnum.Other,
    fees: false,
    expirePayment: 12000,
    registered: false,
}, {
    clientNumber: "123 12123 123",
    title: "Claro",
    value: 34440,
    uniqueId: 16,
    expire: new Date('02/02/2021'),
    selected: false,
    textStatus: '',
    status: '',
    extraValue: [123132, 342343],
    type: OptionsAccountEnum.Teleco,
    fees: false,
    expirePayment: 12000,
    registered: false,
}]

export const selectPaymentMethodBancoEstado: Array <PaymentMethod> = [{
    number: '**** **** **** 5463',
    numberResume: '**** 5463',
    type: PaymentMethodType.BancoEstado,
    primary: true,
    bank: 'Banco Estado',
    typeDescription: PaymentMethodTypeDescription.CtaRut,
    image: 'payments/mastercard.png',
},
{
    number: '**** **** **** 5463',
    numberResume: '**** 5463',
    type: PaymentMethodType.BancoEstado,
    primary: false,
    bank: 'Banco Estado',
    typeDescription: PaymentMethodTypeDescription.CtaCorriente,
    image: 'payments/mastercard.png',
},
{
    number: '**** **** **** 5463',
    numberResume: '**** 5463',
    type: PaymentMethodType.BancoEstado,
    primary: false,
    bank: 'Banco Estado',
    typeDescription: PaymentMethodTypeDescription.TCreditor,
    image: 'payments/mastercard.png',
}
];

export const selectPaymentMethodOtherBank: Array <PaymentMethod> = [{
    number: '**** **** **** 5463',
    numberResume: '**** 5463',
    type: PaymentMethodType.Mastercard,
    primary: false,
    bank: 'Banco de Chile',
    typeDescription: PaymentMethodTypeDescription.TCreditor,
    image: 'payments/mastercard.png',
},
{
    number: '**** **** **** 5463',
    numberResume: '**** 5463',
    type: PaymentMethodType.Visa,
    primary: false,
    bank: 'Scotiabank',
    typeDescription: PaymentMethodTypeDescription.TCreditor,
    image: 'payments/mastercard.png',
}
];

export const changePaymentMethodList: Array <PaymentMethod> = [{
    number: '**** **** **** 5463',
    numberResume: '**** 5463',
    type: PaymentMethodType.BancoEstado,
    primary: true,
    bank: 'Banco Estado',
    typeDescription: PaymentMethodTypeDescription.CtaRut,
    image: 'payments/mastercard.png',
},
{
    number: '**** **** **** 5463',
    numberResume: '**** 5463',
    type: PaymentMethodType.BancoEstado,
    primary: false,
    bank: 'Banco Estado',
    typeDescription: PaymentMethodTypeDescription.CtaCorriente,
    image: 'payments/mastercard.png',
},
{
    number: '**** **** **** 5463',
    numberResume: '**** 5463',
    type: PaymentMethodType.BancoEstado,
    primary: false,
    bank: 'Banco Estado',
    typeDescription: PaymentMethodTypeDescription.TCreditor,
    image: 'payments/mastercard.png',
}
];

export const paymentMethodList : Array<PaymentBank> = [
{
    title: 'Banco Estado',
    image: 'banco-estado.svg',
},
{
    title: 'Banco Estado',
    image: 'banco-chile.svg',
}, 
{
    title: 'Banco Estado',
    image: 'banco-security.svg',
},
{
    title: 'Banco Estado',
    image: 'banco-santander.svg',
},
{
    title: 'Banco Estado',
    image: 'bci.svg',
},
{
    title: 'Banco Estado',
    image: 'bbva.svg',
}
];

export const paymentMethodBELogin : Array<any> = [
    {
        title: 'Cuenta RUT',
        number: '10.000.555-k',
    },
    {
        title: 'Chequera electronica',
        number: '000-555-6666',
    },
    {
        title: 'Cuenta corriente',
        number: '333-00-9987',
    },
];