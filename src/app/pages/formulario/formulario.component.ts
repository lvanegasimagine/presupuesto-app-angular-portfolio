import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../../services/ingreso.service';
import { EgresoService } from '../../services/egreso.service';
import { Ingreso } from '../../core/ingreso.model';
import { Egreso } from 'src/app/core/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = 'ingresoOperacion';
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === 'ingresoOperacion'){
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
      this.limpiarInput();
    }else{
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
      this.limpiarInput();
    }
  }

  limpiarInput(){
    this.descripcionInput = '';
    this.valorInput = 0;
  }
}
