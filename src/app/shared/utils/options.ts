import { IconGroup } from './types';
const src = 'assets/imgs/icons';

/* ENUM */
export enum OptionsGroup {
  Phone = 'phone',
  Pet = 'pet',
  Vacation = 'vacation',
  Trip = 'trip',
  Food = 'food',
  Fun = 'fun',
  Bank = 'bank',
  Bike = 'bike',
  Road = 'road',
  Default = 'default',
  HistoryGroupDefault = 'historyGroupDefault',
};

export enum OptionsAccountEnum {
  Electrical = 'electrical',
  Teleco = 'teleco',
  Other = 'other',
  Water = 'water',
  Group = 'group',
  HistoryGroupDefault = 'historyGroupDefault',
};

export enum PaymentAccountAndGroupStatus {
  Error = 'error',
  Warning = 'warning',
  Success = 'success',
  Void = '',
  Info = 'info',
};

export enum PaymentMethodType {
  Mastercard = 'mastercard',
  Visa = 'visa',
  Default = 'default',
  BancoEstado = 'banco-estado',
};

export enum PaymentMethodTypeDescription {
  CtaRut = 'Cuenta RUT',
  CtaCorriente = 'C. Corriente',
  TCreditor = 'Tarjeta de crédito',
};

export const iconGroupList : Array<IconGroup> = [
  {
    favorite: false,
    img: `${src}/call-answer-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Default,
  },
  {
    favorite: false,
    img: `${src}/call-answer-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.HistoryGroupDefault,
  },
  {
    favorite: true,
    img: `${src}/call-answer-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Phone,
  },
  {
    favorite: true,
    img: `${src}/pawprint-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Pet,
  },
  {
    favorite: true,
    img: `${src}/sun-umbrella-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Vacation,
  },
  {
    favorite: false,
    img: `${src}/confetti-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Fun,
  },
  {
    favorite: false,
    img: `${src}/confetti-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Trip,
  },
  {
    favorite: false,
    img: `${src}/confetti-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Food,
  },
  {
    favorite: false,
    img: `${src}/confetti-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Bank,
  },
  {
    favorite: false,
    img: `${src}/confetti-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Bike,
  },
  {
    favorite: true,
    img: `${src}/confetti-blue.svg`,
    imgAlt: `${src}/call-answer-white.svg`,
    name: OptionsGroup.Road,
  }
];

export const iconAccount = {
  [OptionsAccountEnum.Electrical]: `${src}/call-answer-white.svg`,
  [OptionsAccountEnum.Teleco]: `${src}/call-answer-white.svg`,
  [OptionsAccountEnum.Other]: `${src}/call-answer-white.svg`,
  [OptionsAccountEnum.Water]: `${src}/call-answer-white.svg`,
  [OptionsAccountEnum.Group]: `${src}/call-answer-white.svg`,
};

export const colorsAccount = {
  [OptionsAccountEnum.Electrical]: 'rgb(255, 184, 66)',
  [OptionsAccountEnum.Other]: 'rgb(0, 215, 147)',
  [OptionsAccountEnum.Water]: 'rgb(26, 140, 255)',
  [OptionsAccountEnum.Teleco]: 'rgb(126, 129, 255)',
  [OptionsAccountEnum.Group]: '#042c5c',
  [OptionsAccountEnum.HistoryGroupDefault]: '#042c5c',
};

export const colors: any = {
  default: '#ffffff',
  [PaymentAccountAndGroupStatus.Success]: '#00d793',
  [PaymentAccountAndGroupStatus.Error]: '#f44336',
  [PaymentAccountAndGroupStatus.Warning]: 'rgb(255, 184, 66)',
  [PaymentAccountAndGroupStatus.Info]: '#4990ff',
  primary: '#042c5c',
  secondary: 'rgb(119, 134, 158)',
  active: '#77869e',
  secondaryLight: '#d8d8d8',
  link: '#4990ff',
  action: '#1e63f8',
};