import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerrarSesionAdmPageRoutingModule } from './cerrar-sesion-adm-routing.module';

import { CerrarSesionAdmPage } from './cerrar-sesion-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerrarSesionAdmPageRoutingModule
  ],
  declarations: [CerrarSesionAdmPage]
})
export class CerrarSesionAdmPageModule {}
