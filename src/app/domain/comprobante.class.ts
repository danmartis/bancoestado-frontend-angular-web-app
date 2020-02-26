export interface comprobante {
    cuentaPago: number;
    fecha: string;
    hora: string;
    idTransaccion: number;
    montoTotalPagado: number;
    nroDocumentos: number;
    detalle: detalleComprobante[];
}

export interface detalleComprobante {
    convenio: string;
    empresa: string;
    idCliente: string;
    servicio: string;
    montoPagado: number;
    nombrealias: string;
    nroDocumento: string;
}