import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroNegocioPageRoutingModule } from './registro-negocio-routing.module';

import { RegistroNegocioPage } from './registro-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroNegocioPageRoutingModule
  ],
  declarations: [RegistroNegocioPage]
})
export class RegistroNegocioPageModule {}
