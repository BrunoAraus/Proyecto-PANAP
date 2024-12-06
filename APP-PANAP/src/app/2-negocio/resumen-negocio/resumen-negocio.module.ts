import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenNegocioPageRoutingModule } from './resumen-negocio-routing.module';

import { ResumenNegocioPage } from './resumen-negocio.page';
import { HttpClientModule } from '@angular/common/http';
import { IonContent } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenNegocioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ResumenNegocioPage]
})
export class ResumenNegocioPageModule {}
