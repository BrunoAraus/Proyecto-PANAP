import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerrarSesionCliPageRoutingModule } from './cerrar-sesion-cli-routing.module';

import { CerrarSesionCliPage } from './cerrar-sesion-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerrarSesionCliPageRoutingModule
  ],
  declarations: [CerrarSesionCliPage]
})
export class CerrarSesionCliPageModule {}
