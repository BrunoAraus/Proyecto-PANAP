import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerrarSesionNegPageRoutingModule } from './cerrar-sesion-neg-routing.module';

import { CerrarSesionNegPage } from './cerrar-sesion-neg.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerrarSesionNegPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CerrarSesionNegPage]
})
export class CerrarSesionNegPageModule {}
