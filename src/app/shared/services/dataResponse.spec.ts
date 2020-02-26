import { DataResponse } from './dataResponse';
import { Component } from '@angular/core';

describe('saldoResponse', () => {
  let dataResponse: DataResponse;

  it('Funcion isServiceOK', () => {
        dataResponse = new DataResponse(true, '', '','');
        expect(dataResponse.isServiceOK()).toBe(true);
  });

  it('Funcion getMensaje', () => {
        dataResponse = new DataResponse(true, 'OK', '','');
        expect(dataResponse.getMensaje()).toBe('');
  });

  it('Funcion getDetalle', () => {
        dataResponse = new DataResponse(true, 'OK', '','');
        expect(dataResponse.getDetalle()).toBe('');
  });

  it('Funcion getCodigo', () => {
      dataResponse.getCodigo();
  });

});
