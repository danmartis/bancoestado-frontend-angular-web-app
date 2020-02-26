import { Cliente } from './cliente.class';

let cliente: Cliente;

describe('ClienteClass', () => {
    it('crear instancia', () => {
        cliente = new Cliente();
    });
    
    it('Pruebas get y set', () => {
        cliente = new Cliente();
        cliente.token('123asd');
        expect(cliente.token()).toEqual('123asd');
    });

    it('limpiar instancia', () => {
        Cliente.clearInstance();
        expect(Cliente.instance).toBe(null);
    });
    
    it('cliente encoded', () => {
        cliente = new Cliente();
    });
    
});