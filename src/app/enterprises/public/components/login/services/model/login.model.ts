export interface User {
    id: number;
    email: string;
    rut: string;
    password: string;
    changePassword: boolean;
    userRut: string;
    birthday: string;
    phone: string;
    address: string;
    commune: string;
    city: string;
    roles: any[];
    company: any[];
    contact: string,
    contactType: string
}