import { Cliente } from './cliente.class';

let cliente: Cliente;

describe('ClienteClass', () => {
    let dataEncoded = {
        _token: '123asd',
        _codigosesion: '1234',
        _sesionActiva: true
    };

    let store = {};
    const mockSessionStorage = {
        getItem: (key: string): string => {
            return key in store ? store[key] : null;
        },
        setItem: (key: string, value: string) => {
            store[key] = `${value}`;
        }
    };

    beforeEach(() => {
        cliente = new Cliente(JSON.stringify(dataEncoded));
    });

    it('nueva instancia sin datos', () => {
        cliente = new Cliente();
        expect(cliente.token()).toEqual(undefined);
    });

    it('token()', () => {
        cliente.token('123asd');
        expect(cliente.token()).toEqual(dataEncoded._token);
    });

    it('codigoSesion()', () => {
        const a = cliente.codigoSesion('1234');
        expect(a).toEqual(dataEncoded._codigosesion);
    });

    it('codigoSesion() - val undefined', () => {
        const a = cliente.codigoSesion(undefined);
        expect(a).toEqual(dataEncoded._codigosesion);
    });

    it('sesionActiva()', () => {
        const a = cliente.sesionActiva(true);
        expect(a).toEqual(true);
    });

    it('sesionActiva() - val undefined', () => {
        const a = cliente.sesionActiva(undefined);
        expect(a).toEqual(false);
    });

    it('getInstance()', () => {
        Cliente.getInstance();
        expect(Cliente.instance.sesionActiva()).toBe(false);
    });

    it('getInstance() instancia = null', () => {
        Cliente.instance = null;
        Cliente.getInstance();
        expect(Cliente.instance.sesionActiva()).toBe(false);
    });

    it('getInstance() dataEncoded = null', () => {
        Cliente.instance = null;
        store[Cliente.KEY_STORAGE] = null;
        spyOn(sessionStorage, 'getItem').and.callFake(mockSessionStorage.getItem);
        Cliente.getInstance();
        expect(Cliente.instance.sesionActiva()).toBe(false);
    });

    it('clearInstance() - limpiar instancia', () => {
        Cliente.clearInstance();
        expect(Cliente.instance).toBe(null);
    });

    it('saveInstance() - limpiar instancia', () => {
        cliente.saveInstance();
        expect(sessionStorage.getItem(Cliente.KEY_STORAGE)).toBeDefined();
    });
    
});