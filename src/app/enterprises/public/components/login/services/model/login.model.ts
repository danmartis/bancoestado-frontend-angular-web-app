export interface User {
    id: number;
    email: string;
    rut: string;
    firstName: string;
    lastName: string
    password: string;
    changePassword: boolean;
    userRut: string;
    birthday: string;
    phone: string;
    address: string;
    commune: string;
    city: string;
    roles: any[];
    covenants: any[]
    company: any[];
    contact: string,
    contactType: string
}