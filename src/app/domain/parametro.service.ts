import { Injectable } from '@angular/core';

@Injectable()
export class ParametroService {
    mapParametros = new Map<string, any>();
    constructor() { }
    public getParametros(): Map<string, any> {
        return this.mapParametros;
    }

    public addParametro(key: string, valor: any): void {
        this.mapParametros.set(key, valor);
    }

    public getParametro(key: string): any {
        return this.mapParametros.get(key);
    }

    public deleteParametro(key: string): void {
        this.mapParametros.delete(key);
    }
}
