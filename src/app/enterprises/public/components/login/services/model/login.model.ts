export interface User {
    id: number;
    email: string;
    rut: string;
    password: string;
    changePassword: boolean;
    userRut: string;
    birthday: Date;
    phone: number;
    address: string;
    comunne: string;
    city: string;
    roles: string[];
    company: string[];
    contact: string,
    contactType: string
}