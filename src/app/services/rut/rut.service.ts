import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutService {

  constructor() { }

  formatearRut(rut: string) {
    let rutLimpio = rut.replace(/-/g, "");
    if (rutLimpio != "" && rutLimpio.length > 1) {
      let inicio = rutLimpio.substring(0, rutLimpio.length - 1);
      let rutFormateado = "";
      let i = 0;
      let j = 1;
      for (i = inicio.length - 1; i >= 0; i--) {
        let letra = inicio.charAt(i);
        rutFormateado = letra + rutFormateado;
        if (j % 3 == 0 && j <= inicio.length - 1) {
          rutFormateado = "." + rutFormateado;
        }
        j++;
      }
      let dv = rutLimpio.substring(rutLimpio.length - 1);
      rutFormateado = rutFormateado + "-" + dv;
      return rutFormateado;
    }
  }
}
