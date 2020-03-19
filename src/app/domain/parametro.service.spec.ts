import { TestBed } from '@angular/core/testing';
import { ParametroService } from './parametro.service';

describe('ParametroService', () => {

    let service: ParametroService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ParametroService]
        })
        service = new ParametroService();
    });

    it('should be created', () => {
        const service: ParametroService = TestBed.get(ParametroService);
        expect(service).toBeTruthy();
    });

    it('getParametros()', () => {
        service.addParametro('key1', 'valor1');
        service.addParametro('key2', 'valor2');
        const a = service.getParametros();
        expect(a.size).toEqual(2);
    });

    it('addParametro()', () => {
        service.addParametro('key', 'valor');
        expect(service.getParametro('key')).toEqual('valor');
    });

    it('getParametro()', () => {
        service.addParametro('key', 'valor');
        const a = service.getParametro('key');
        expect(a).toEqual('valor');
    });

    it('deleteParametro()', () => {
        service.deleteParametro('key');
        expect(service.getParametro('key')).toBeUndefined();
    });

})