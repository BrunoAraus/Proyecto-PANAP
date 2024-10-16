import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuNegocioPageRoutingModule } from './menu-negocio-routing.module';

import { MenuNegocioPage } from './menu-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuNegocioPageRoutingModule
  ],
  declarations: [MenuNegocioPage]
})
export class MenuNegocioPageModule {}
