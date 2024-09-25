import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPanNegocioPageRoutingModule } from './modificar-pan-negocio-routing.module';

import { ModificarPanNegocioPage } from './modificar-pan-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPanNegocioPageRoutingModule
  ],
  declarations: [ModificarPanNegocioPage]
})
export class ModificarPanNegocioPageModule {}
