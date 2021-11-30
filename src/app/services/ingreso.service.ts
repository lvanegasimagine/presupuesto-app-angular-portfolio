import { Injectable } from '@angular/core';
import { Ingreso } from '../core/ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  ingresos: Ingreso[]=[new Ingreso('Salario',4000),new Ingreso('Venta de Coche',500)];

  constructor() { }

  eliminar(ingreso: Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }
}
