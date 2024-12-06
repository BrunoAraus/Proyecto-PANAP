import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesNegocioPageRoutingModule } from './solicitudes-negocio-routing.module';

import { SolicitudesNegocioPage } from './solicitudes-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesNegocioPageRoutingModule
  ],
  declarations: [SolicitudesNegocioPage]
})
export class SolicitudesNegocioPageModule {}
