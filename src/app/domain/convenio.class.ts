export interface Rubro {
    idRubro: number;
    nombreRubro: string;
    logotipo: string;
}

export interface Convenio {
    idConvenio: number;
    servicio: string;
    empresa: string;
    imgCuenta: string;
    rubro: Rubro;
}