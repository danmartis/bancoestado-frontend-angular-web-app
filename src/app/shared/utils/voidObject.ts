import { PaymentAccount } from './types';

export const paymentAccount : PaymentAccount = {
    clientNumber: '',
    title: '',
    value: 0,
    uniqueId: 0,
    expire: new Date(),
    selected: false,
    counter: 0,
    status: '',
    textStatus: '',
    extraValue: false,
    type: '',
    fees: false,
    expirePayment : 0,
}