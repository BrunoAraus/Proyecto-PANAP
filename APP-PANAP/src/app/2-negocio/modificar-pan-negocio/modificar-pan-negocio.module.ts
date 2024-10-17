import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPanNegocioPageRoutingModule } from './modificar-pan-negocio-routing.module';

import { ModificarPanNegocioPage } from './modificar-pan-negocio.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPanNegocioPageRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ModificarPanNegocioPage]
})
export class ModificarPanNegocioPageModule {}
