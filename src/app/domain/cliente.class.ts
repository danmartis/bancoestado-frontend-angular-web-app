export class Cliente {
    static instance: Cliente = null;

    static KEY_STORAGE = 'pago20.Cliente';


    private _token: string;
    public token(val?: string): string {
        return val == undefined ? this._token : (this._token = val);
    }

    private _codigosesion:string;
    public codigoSesion(val?: string):string {
        return val == undefined ? this._codigosesion : (this._codigosesion = val);
    }

    private _sesionActiva = false;
    public sesionActiva(val?: boolean): boolean {
        return val == undefined ? this._sesionActiva : (this._sesionActiva = val);
    }

    /** @constructor **/
    constructor(dataEncoded?: string) {
        let clienteJson = null;
        if (dataEncoded) {
            clienteJson = JSON.parse(dataEncoded);
        }
        this.codigoSesion(clienteJson ? clienteJson._codigosesion : '');
        this.token(clienteJson ? clienteJson._token : null);
    }


    public static getInstance(): Cliente {
        if (this.instance === null) {
            const dataEncoded = sessionStorage.getItem(this.KEY_STORAGE);
            this.instance = dataEncoded != null ? new Cliente(atob(dataEncoded)) : new Cliente();
            this.instance.sesionActiva(false); //inicializa el cliente sin sesión activa
        }
        return this.instance;
    }

    public static clearInstance() {
        this.instance = null;
    }

    public saveInstance() {
        const dataEncoded = btoa(JSON.stringify(this));
        sessionStorage.setItem(Cliente.KEY_STORAGE, dataEncoded);
    }
}