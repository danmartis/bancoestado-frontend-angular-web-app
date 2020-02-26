import { PaymentAccountAndGroupStatus, PaymentMethodType, PaymentMethodTypeDescription } from './options';

export type Group = {
    title: string,
    detail: string,
    value: number,
    icon: string,
    textStatus: string,
    status: string,
};

export type ClientNumber = {
    number: string,
    extra?: string,
};

export type PaymentMethod = {
    number: string,
    type: PaymentMethodType,
    primary: boolean,
    bank: string,
    typeDescription?: PaymentMethodTypeDescription,
    numberResume?: string,
    image?: string,
};

export type PaymentBank = {
    title: string,
    image: string,
}

export type PaymentFee = {
    value: number,
    title: string,
}

export type PaymentAccount = {
    clientNumber: string,
    title: string,
    value: number,
    uniqueId: number,
    expire?: Date,
    selected?: boolean,
    counter?: number,
    status?: string,
    textStatus?: string,
    extraValue?: boolean | Array<number>,
    type: string,
    fees?: boolean | Array<PaymentFee>,
    fullPayment? : number,
    expirePayment? : number,
    group? : string,
    groupList? : Array<PaymentAccount>,
    payDate?: Date,
    textInfo?: string,
    info?: PaymentAccountAndGroupStatus,
    registered?: boolean,
};

export type IconGroup = {
    favorite: boolean,
    img: string,
    imgAlt: string,
    name: string,
};

export type VoucherDetail = {
    name: string,
    value: string | number,
};

export type Voucher = {
    isSingle: boolean,
    detailSingleImage?: string,
    accounts?: Array<PaymentAccount>,
    detail: Array<VoucherDetail>,
    value: number,
    from: string,
    message: string,
};

export type HistoryPaymentMonth = {
    name: string,
    value?: string | number,
    accounts: Array<PaymentAccount>,
};

export type HistoryPayment = {
    value?: number,
    totalAccount: number,
    months: Array<HistoryPaymentMonth>,
};

export type HistoryPaymentAdvanced = Array<PaymentAccount>;

