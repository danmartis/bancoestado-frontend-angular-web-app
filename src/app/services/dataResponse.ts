export class DataResponse {
    private serviceOK: boolean;
    private codigo: string;
    private mensaje: string;
    private detalle: any = {};

    /** @constructor */
    constructor(serviceOK: boolean, codigo: string, mensaje: string, datosRespuesta: any) {
        this.serviceOK = serviceOK;
        this.codigo = codigo;
        this.mensaje = mensaje;
        this.detalle = datosRespuesta;
    }

    /**
     * @method isServiceOK
     * @return boolean
     */
    public isServiceOK(): boolean {
        return this.serviceOK;
    }

    /**
     * @method getCodigo
     * @returns string
     */
    public getCodigo(): string {
      return this.codigo;
    }

    /**
     * @method getMensaje
     * @returns string
     */
    public getMensaje(): string {
        return this.mensaje;
    }

    /**
     * @method getProductos
     * @returns any
     */
    public getDetalle(): any {
        return this.detalle;
    }
}
