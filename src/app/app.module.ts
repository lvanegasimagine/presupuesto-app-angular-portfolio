import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './pages/cabecero/cabecero.component';
import { EgresoComponent } from './pages/egreso/egreso.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    EgresoComponent,
    IngresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
