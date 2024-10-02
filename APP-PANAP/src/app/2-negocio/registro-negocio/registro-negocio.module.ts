import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroNegocioPageRoutingModule } from './registro-negocio-routing.module';

import { RegistroNegocioPage } from './registro-negocio.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroNegocioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RegistroNegocioPage]
})
export class RegistroNegocioPageModule {}
