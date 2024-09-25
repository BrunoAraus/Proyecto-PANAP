import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasNegocioPageRoutingModule } from './reservas-negocio-routing.module';

import { ReservasNegocioPage } from './reservas-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasNegocioPageRoutingModule
  ],
  declarations: [ReservasNegocioPage]
})
export class ReservasNegocioPageModule {}
